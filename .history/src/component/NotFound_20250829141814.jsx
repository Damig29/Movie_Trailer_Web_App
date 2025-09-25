import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <Link to="/" className="text-indigo-600 underline">Go back home</Link>
    </div>
  );
};

export default NotFound;


