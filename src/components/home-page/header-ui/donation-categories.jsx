import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react";

import burger from "@/assets/images/home-page/burger.png";
import carrot from "@/assets/images/home-page/carrot.png";
import sushiCaviar from "@/assets/images/home-page/sushi-caviar.png";
import taco from "@/assets/images/home-page/taco.png";

const categoryList = [
  { path: "/vegetable", image: sushiCaviar, title: "Vegetables" },
  { path: "/fruits", image: carrot, title: "Fruits" },
  { path: "/protein", image: taco, title: "Protein" },
  { path: "/groceries", image: burger, title: "Groceries" },
];

export function DonationCategories() {
  return (
    <div className="p-2 bg-white rounded-lg">
      <div className="grid grid-cols-5">
        {categoryList.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center gap-2"
          >
            <Link
              to={`donation-categories/${category.path}`}
              className="bg-accent-500 rounded-full p-2"
            >
              <img
                src={category.image}
                aria-label={`View more in ${category.title} category`}
              />
            </Link>
            <span aria-hidden="true" className="text-xs font-semibold">
              {category.title}
            </span>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2">
          <Link
            to="donation-categories"
            className="bg-accent-500 rounded-full p-2 h-full flex items-center"
          >
            <LayoutGrid
              className="aspect-square w-[35px]"
              aria-label={`View all donation categories`}
            />
          </Link>
          <span aria-hidden="true" className="text-xs font-semibold">
            More
          </span>
        </div>
      </div>
    </div>
  );
}
