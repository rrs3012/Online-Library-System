import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError() || { status: "404", statusText: "Page Not Found", data: "Oops! The page you are looking for doesn't exist." };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 text-purple-800 px-6">
      <div className="bg-purple-50 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-purple-600">Oh No!</h1>
        <h2 className="text-3xl font-semibold mt-4">{err.status} - {err.statusText}</h2>
        <p className="text-lg text-purple-600 mt-2">{err.data || "Something went astray. Please try again."}</p>

        <Link
          to="/"
          className="mt-6 inline-block bg-purple-400 text-purple-800 text-lg font-semibold py-2 px-6 rounded-lg shadow-md 
                    hover:bg-purple-500 hover:scale-105 transition-all duration-300"
        >
          🔙 Return to Library
        </Link>
      </div>
    </div>
  );
}

export default Error;