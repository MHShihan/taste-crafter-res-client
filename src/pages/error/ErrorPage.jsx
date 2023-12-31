import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-5xl mt-20 font-bold text-center">OPPs!!! Error</h1>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <button className="btn btn-outline text-xl font-medium">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
