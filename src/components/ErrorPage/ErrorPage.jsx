import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className="text-7xl text-green-700">Oppppso</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>Back where  from </p>
                    <Link to={'/'}><button className="btn">Go back Home Page</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;