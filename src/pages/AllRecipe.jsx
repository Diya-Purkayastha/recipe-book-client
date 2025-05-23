import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterCuisine, setFilterCuisine] = useState('');

  useEffect(() => {
    let url = 'https://recipe-book-server-iota.vercel.app/recipe';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (filterCuisine) {
          const filtered = data.filter(r => r.cuisineType === filterCuisine);
          setRecipes(filtered);
        } else {
          setRecipes(data);
        }
      });
  }, [filterCuisine]);

  const cuisineOptions = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">🍴 All Recipes</h2>

      {/* Cuisine Filter Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          onChange={(e) => setFilterCuisine(e.target.value)}
          className="select select-bordered w-full max-w-xs"
          value={filterCuisine}
        >
          <option value="">Filter by Cuisine</option>
          {cuisineOptions.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Recipes Grid */}
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center">No recipes found.</p>
      )}
    </div>
  );
};

export default AllRecipe;
