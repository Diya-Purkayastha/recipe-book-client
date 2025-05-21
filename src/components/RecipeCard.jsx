import { Link } from "react-router";


const RecipeCard = ({ recipe }) => {
  const {
    _id,
    image,
    title,
    cuisineType,
    likeCount
  } = recipe;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
      <figure>
        <img src={image || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <p><strong>Cuisine:</strong> {cuisineType}</p>
        <p><strong>Likes:</strong> {likeCount}</p>
        <div className="card-actions justify-end">
          <Link to={`/recipe/${_id}`} className="btn btn-sm btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
