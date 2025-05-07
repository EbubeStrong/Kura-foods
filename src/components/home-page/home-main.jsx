import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";

const API_KEY = "51d2c44770324261bea5c11e65d42b3c";

export function HomeMain() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section>
      <div className="p-2 space-y-2 mb-20">
        <h1 className="text-lg font-bold">Items Donated</h1>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {recipes.map((item) => (
              <Card key={item.id} className="p-0">
                <CardContent className="p-4 space-y-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span>{item.title}</span>
                      <span>Uploaded on {dayjs().format("DD/MM/YYYY")}</span>
                    </div>
                    <Link
                      to={`/recipe/${item.id}`}
                      state={item}
                      className={cn(
                        buttonVariants({ variant: "secondary" }),
                        "rounded-full bg-primary-200  aspect-square w-10 p-0"
                      )}
                    >
                      <Plus className="hover:text-primary-200 text-white h-6 w-6" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
