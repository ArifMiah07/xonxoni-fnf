import { Link } from "react-router-dom";

const BricksGameCard = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl rounded-lg p-4">
      <figure className="flex justify-center mb-4">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Bricks Game" 
          className="w-32 h-32 object-cover rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mb-2">Bricks Game</h2>
        <p className="text-gray-600 mb-4">
          Enjoy the classic Bricks game! Navigate the Bricks to eat the food, grow longer, and avoid hitting the walls or yourself.
        </p>
        <div className="card-actions justify-end">
         <Link to={'/bricksGame'}>
            <button className="btn btn-primary">Play Now</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default BricksGameCard;
