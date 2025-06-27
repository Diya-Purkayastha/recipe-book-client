import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const DashboardAllItems = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recipe-book-server-iota.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="py-10 max-w-7xl mx-auto overflow-x-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">📋 All Recipes</h2>

            {recipes.length === 0 ? (
                <p className="text-center">No recipes found.</p>
            ) : (
                 <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Cuisine</th>
                            <th>Prep Time</th>
                            <th>Likes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe, index) => (
                            <tr key={recipe._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src={recipe.image || '/placeholder.jpg'} alt={recipe.title} />
                                        </div>
                                    </div>
                                </td>
                                <td>{recipe.title}</td>
                                <td>{recipe.cuisineType}</td>
                                <td>{recipe.preparationTime} min</td>
                                <td>{recipe.likeCount || 0}</td>
                                <td>
                                    <Link to={`/recipe/${recipe._id}`} className="btn btn-sm btn-secondary">
                                        View Details
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            )}
        </div>
    );
};

export default DashboardAllItems;
