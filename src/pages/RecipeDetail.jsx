import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const RecipeDetail = () => {
  const { state: recipe } = useLocation();
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
    setTimeout(() => navigate("/home"), 2000); // Redirect after 2 seconds
  };

  return (
    <div className="relative bg-white min-h-screen p-4">
      {/* Recipe Image */}
      <div className="w-full h-60 rounded-xl overflow-hidden mb-4">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
      </div>

      {/* Recipe Info */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{recipe.title}</h2>
        <p className="text-gray-600">Description:</p>
        <p className="text-sm text-gray-700">
          {recipe.summary?.replace(/<[^>]*>?/gm, "").slice(0, 160) || "No description available."}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <p>Demanded by: <strong>+10K Orgs</strong></p>
          <p>Uploaded: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Request Button */}
      <div className="mt-6">
        <button
          onClick={handleRequest}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-full"
        >
          Requested Item
        </button>
      </div>

      {/* Success Popup */}
      {requested && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl text-center shadow-lg animate-bounce">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9043/9043591.png"
              alt="Success"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="text-lg font-bold">Voila</h3>
            <p className="text-sm mt-1">Your item request has been successfully accepted.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
