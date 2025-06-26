import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyRecipe = () => {
  const { user } = use(AuthContext)
  const [recipes, setRecipes] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://recipe-book-server-iota.vercel.app/myrecipe/${user.email}`)
        .then(res => res.json())
        .then(data => setRecipes(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this recipe!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://recipe-book-server-iota.vercel.app/recipe/${id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
          setRecipes(prev => prev.filter(r => r._id !== id));
          Swal.fire('Deleted!', 'Your recipe has been deleted.', 'success');
        }
      }
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedRecipe = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisineType: form.cuisineType.value,
      preparationTime: Number(form.preparationTime.value),
      categories: form.categories.value.split(',').map(c => c.trim()),
    };

    const res = await fetch(`https://recipe-book-server-iota.vercel.app/recipe/${editing._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      const updatedList = recipes.map(r =>
        r._id === editing._id ? { ...r, ...updatedRecipe } : r
      );
      setRecipes(updatedList);
      Swal.fire('Updated!', 'Recipe updated successfully!', 'success');
      setEditing(null);
    }
  };

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">🧑‍🍳 My Recipes</h2>

      {recipes.length === 0 ? (
        <p className="text-center">No recipes found.</p>
      ) : (
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Prep Time</th>
              <th>Cuisine</th>
              <th>Categories</th>
              <th>Likes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={recipe._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded">
                      <img src={recipe.image || '/placeholder.jpg'} alt={recipe.title} />
                    </div>
                  </div>
                </td>
                <td>{recipe.title}</td>
                <td>{recipe.preparationTime} min</td>
                <td>{recipe.cuisineType}</td>
                <td>{recipe.categories?.join(', ')}</td>
                <td>{recipe.likeCount || 0}</td>
                <td className="flex flex-col lg:flex-row gap-2">
                  <button
                    className="btn btn-xs btn-secondary"
                    onClick={() => setEditing(recipe)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-xs btn-primary"
                    onClick={() => handleDelete(recipe._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Modal */}
      {editing && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative p-6 rounded-lg w-full max-w-md shadow-lg space-y-4">

            <form onSubmit={handleUpdate} className="space-y-4">
              <h3 className="text-xl text-primary font-bold">Update Recipe</h3>
              <input name="image" defaultValue={editing.image} placeholder="Image URL" className="input input-bordered w-full" required />
              <input name="title" defaultValue={editing.title} placeholder="Title" className="input input-bordered w-full" required />
              <textarea name="ingredients" defaultValue={editing.ingredients} placeholder="Ingredients" className="textarea textarea-bordered w-full" required />
              <textarea name="instructions" defaultValue={editing.instructions} placeholder="Instructions" className="textarea textarea-bordered w-full" required />
              <input name="cuisineType" defaultValue={editing.cuisineType} placeholder="Cuisine Type" className="input input-bordered w-full" required />
              <input name="preparationTime" type="number" defaultValue={editing.preparationTime} placeholder="Prep Time" className="input input-bordered w-full" required />
              <input name="categories" defaultValue={editing.categories?.toString()} placeholder="Categories (comma-separated)" className="input input-bordered w-full" required />

              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setEditing(null)} className="btn btn-primary">Cancel</button>
                <button type="submit" className="btn btn-secondary">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>

  );
};

export default MyRecipe;
