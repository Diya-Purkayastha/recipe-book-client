import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/animation.json'

const AddRecipe = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    preparationTime: '',
    categories: [],
    likeCount: 0,
  });

  const cuisineOptions = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];
  const categoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter(cat => cat !== value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      ...formData,
      preparationTime: Number(formData.preparationTime),
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
    };

    try {
      const res = await fetch('http://localhost:3000/recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire('Success!', 'Recipe added successfully!', 'success');
        setFormData({
          image: '',
          title: '',
          ingredients: '',
          instructions: '',
          cuisineType: '',
          preparationTime: '',
          categories: [],
          likeCount: 0,
        });
      } else {
        Swal.fire('Error!', 'Failed to add recipe.', 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error!', 'Server error.', 'error');
    }
  };

  return (
    <div className=" px-4 py-10 max-w-5xl mx-auto ">
      <div className='flex justify-center mt-0'>
        <Lottie animationData={animationData} loop={true} style={{ width: 150, height: 150 }}  />
      </div>
      <h2 className="text-4xl font-bold text-white text-center mb-10"> Add a New Recipe</h2> 
      
      
    

      <form onSubmit={handleSubmit}  className='border p-2 rounded-2xl border-white'>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="ingredients"
            placeholder="Ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 w-full"
            required
          ></textarea>

          <textarea
            name="instructions"
            placeholder="Instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 w-full"
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-4">
         <div className="flex gap-4 mt-4">
           <select
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            className="select select-bordered"
            required
          >
            <option value="">Select Cuisine Type</option>
            {cuisineOptions.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>

          <input
            type="number"
            name="preparationTime"
            placeholder="Preparation Time (in minutes)"
            value={formData.preparationTime}
            onChange={handleChange}
            className="input input-bordered "
            required
          />
         </div>

          <div>
            <label className="block mb-2 font-medium text-white">Categories:</label>
            <div className="flex flex-wrap gap-3">
              {categoryOptions.map((cat) => (
                <label key={cat} className="label cursor-pointer text-white">
                  <input
                    type="checkbox"
                    name="categories"
                    value={cat}
                    checked={formData.categories.includes(cat)}
                    onChange={handleChange}
                    className="checkbox mr-2 checkbox-secondary"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-secondary w-full mt-4">
            Add Recipe
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddRecipe;
