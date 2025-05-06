import dayjs from "dayjs";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";

const itemsDonated = [
  {
    id: 1,
    img: {
      src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "grilled steak with vegetables in a plate",
    },
    name: "Grilled Steak with Vegetables",
    donated: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 2,
    img: {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "sushi in a plate",
    },
    name: "Sushi",
    donated: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 3,
    img: {
      src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "cooked noodles with shrimp",
    },
    name: "Cooked Noodles with Shrimp",
    donated: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 4,
    img: {
      src: "https://plus.unsplash.com/premium_photo-1699976106481-02baab9811da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "a wooden cutting board topped with green vegetables and fruit",
    },
    name: "Green Vegetables and Fruit",
    donated: dayjs().format("DD/MM/YYYY"),
  },
  {
    id: 5,
    img: {
      src: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "selective focus photography of burger patty mayonnaise and french fries served on platter",
    },
    name: "Burger, Patty Mayonnaise and Fries",
    donated: dayjs().format("DD/MM/YYYY"),
  },
];

export function HomeMain() {
  return (
    <section>
      <div className="p-2 space-y-2 mb-20">
        <h1 className="text-lg font-bold">Items Donated</h1>
        <div className="space-y-4">
          {itemsDonated.map((item) => (
            <Card key={item.id} className="p-0">
              <CardContent className="p-4 space-y-2">
                <img
                  src={item.img.src}
                  alt={item.img.alt}
                  className="rounded-lg"
                />
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span>{item.name}</span>{" "}
                    <span>Uploaded on {item.donated}</span>
                  </div>
                  <Link
                    to={`/donations/${item.id}`}
                    className={`${cn(
                      buttonVariants({
                        variant: "secondary",
                      }),
                      "rounded-full bg-primary-200 aspect-square w-10 p-0"
                    )}`}
                  >
                    <Plus className="text-white h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
