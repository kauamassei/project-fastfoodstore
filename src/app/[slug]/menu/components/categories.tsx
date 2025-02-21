import Image from "next/image";
import { Restaurant } from "@prisma/client";

interface RestaurantCategoriesProps {
  restaurant: Restaurant;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  return (
    <div className="rounded-t-3x1 relative z-50 mt-[-1.5rem] border bg-white">
      <div className="flex items-center gap-3">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
