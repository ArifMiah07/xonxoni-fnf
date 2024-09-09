import { Link } from "react-router-dom";


const PlayGames = () => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl rounded-lg p-4">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold mb-4">Play Game</h2>
                <p className="text-gray-600 mb-4">
                Explore and enjoy a variety of games available for you to play. Choose your favorite and start playing now!
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <Link to={'/playSnakeGame'}>
                        <button className="btn btn-secondary">Snake Games</button>
                    </Link>
                    <Link to={'/playTetrisGame'}>
                        <button className="btn btn-secondary">Tetris</button>
                    </Link>
                    <button className="btn btn-secondary">Pac-Man</button>
                    <button className="btn btn-secondary">Minesweeper</button>
                </div>
            </div>
        </div>
    );
};

export default PlayGames;