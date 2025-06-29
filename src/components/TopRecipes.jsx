import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import Lottie from 'lottie-react';
import fire from '../assets/animation/fire.json'

const TopRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch('https://recipe-book-server-iota.vercel.app/recipe/top')
      .then(res => res.json())
      .then(data => setTopRecipes(data));
  }, []);

  return (
    <section className="px-4 mx-auto py-8">
      <div className='flex items-center justify-center mb-6'>
          <Lottie animationData={fire} loop={true} style={{ width: 50, height: 65 }}  />
        <h2 className="text-4xl text-primary font-bold text-center "> Top Recipes</h2>
      </div>

      {topRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
