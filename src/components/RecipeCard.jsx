import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { Fade} from 'react-awesome-reveal';


const RecipeCard = ({ recipe }) => {
  const {
    _id,
    image,
    title,
    cuisineType,
    likeCount,
    preparationTime
  } = recipe;

  return (
    <Fade direction="up" delay={200} triggerOnce>
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
      <figure>
        <img src={image || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <p><strong>Cuisine:</strong> {cuisineType}</p>
        <p><strong>Time:</strong> {preparationTime}min</p>
        <p className="flex items-center gap-2"><strong> <FaHeart /></strong> {likeCount}</p>
        <div className="card-actions justify-end">
          <Link to={`/recipe/${_id}`} className="btn btn-sm btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
    </Fade>
    
  );
};

export default RecipeCard;
