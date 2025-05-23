import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router';
import { FaHeart } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [recipe, setRecipe] = useState(null);


  useEffect(() => {
    fetch(`https://recipe-book-server-iota.vercel.app/recipe/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  const handleLike = async () => {
    if (user?.email === recipe?.userEmail) {
      Swal.fire('Oops!', "You can't like your own recipe.", 'info');
      return;
    }

    try {
      const res = await fetch(`https://recipe-book-server-iota.vercel.app/like/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email })
      });

      const data = await res.json();
      if (data.modifiedCount > 0) {
        setRecipe(prev => ({ ...prev, likeCount: prev.likeCount + 1 }));
        
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error!', 'Failed to like the recipe.', 'error');
    }
  };

  if (!recipe) return <p className="text-center py-10">Loading recipe...</p>;

  const {
    image, title, ingredients, instructions,
    cuisineType, preparationTime, likeCount,
    userName, userPhoto,
  } = recipe;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="card bg-base-100 shadow-xl">
        <figure><img src={image || '/placeholder.jpg'} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p><strong>Cuisine Type:</strong> {cuisineType}</p>
          <p><strong>Preparation Time:</strong> {preparationTime} min</p>
          <p><strong>Ingredients:</strong> {ingredients}</p>
          <p><strong>Instructions:</strong> {instructions}</p>
          <p><strong>Categories:</strong> {recipe.categories?.toString()}</p>
          <p><strong>Added by:</strong> {userName} <img src={userPhoto} className="inline w-8 h-8 rounded-full ml-2" /></p>

          <p className="mt-4 text-lg text-primary font-semibold">
            {likeCount} people interested in this recipe
          </p>

          <button
            onClick={handleLike}
            className="btn  btn-secondary mt-3"
            disabled={user?.email === recipe?.userEmail}
          >
            <FaHeart />
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

