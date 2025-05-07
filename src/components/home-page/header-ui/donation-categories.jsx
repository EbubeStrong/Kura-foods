import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react";

// fallback icons/images — use them cyclically for categories
import burger from "@/assets/images/home-page/burger.png";
import carrot from "@/assets/images/home-page/carrot.png";
import sushiCaviar from "@/assets/images/home-page/sushi-caviar.png";
import taco from "@/assets/images/home-page/taco.png";

const fallbackImages = [sushiCaviar, carrot, taco, burger];

export function DonationCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "51d2c44770324261bea5c11e65d42b3c";

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
        );
        const data = await res.json();
        // Extract tags from each recipe and deduplicate
        const allTags = new Set();
        data.recipes.forEach((recipe) => {
          recipe.dishTypes?.forEach((type) => allTags.add(type));
        });

        setCategories(Array.from(allTags).slice(0, 4)); // limit to 4 categories
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="p-2 bg-white rounded-lg">
      <div className="grid grid-cols-5">
        {loading ? (
          <p className="text-sm col-span-5 text-center">Loading...</p>
        ) : (
          categories.map((title, index) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <Link
                to={`donation-category/${title.toLowerCase()}`}
                className="bg-accent-500 rounded-full p-2"
              >
                <img
                  src={fallbackImages[index % fallbackImages.length]}
                  alt={`Category ${title}`}
                  aria-label={`View more in ${title} category`}
                />
              </Link>
              <span className="text-xs font-semibold">{title}</span>
            </div>
          ))
        )}

        <div className="flex flex-col items-center gap-2">
          <Link
            to="donation-category"
            className="bg-accent-500 rounded-full p-2 h-full flex items-center"
          >
            <LayoutGrid
              className="aspect-square w-[35px]"
              aria-label="View all donation categories"
            />
          </Link>
          <span className="text-xs font-semibold">More</span>
        </div>
      </div>
    </div>
  );
}
