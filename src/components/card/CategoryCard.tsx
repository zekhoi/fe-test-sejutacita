import { CategoryState } from "@/types/category";
import clsx from "clsx";

type CategoryCardProps = {
  category: CategoryState;
  select?: () => void;
};

const CategoryCard = ({ category, select }: CategoryCardProps) => {
  return (
    <div
      key={category.id}
      onClick={select}
      className={clsx(
        "inline-flex items-center px-4 py-2 text-center border rounded-md md:text-base text-sm min-w-max",
        {
          ["bg-gelap-500 text-white"]: category.isActive,
          ["cursor-pointer bg-white border-gelap-500 hover:bg-gelap-400 hover:text-white text-gelap-500"]:
            !category.isActive,
        }
      )}
    >
      {category.name}
    </div>
  );
};

export default CategoryCard;
