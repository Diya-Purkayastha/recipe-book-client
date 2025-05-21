import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const TopRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recipe/top')
      .then(res => res.json())
      .then(data => setTopRecipes(data));
  }, []);

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">🔥 Top Recipes</h2>

      {topRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRecipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center">No top recipes available yet.</p>
      )}
    </section>
  );
};

export default TopRecipes;
