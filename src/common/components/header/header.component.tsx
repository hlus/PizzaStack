import React from "react";

import { Categories } from "@app/core/types";
import { Link } from "../link/link.component";
import { Skeleton } from "../skeleton/skeleton.component";

type Category = Omit<Categories, "menu_items">;

interface Props {
  isLoading?: boolean;
  categories?: Category[];
}

export const Header: React.FC<Props> = ({ isLoading, categories }) => {
  const renderCategory = (category: Category) => (
    <Link key={`header-category-${category.id}`} url={`#${category.slug}`}>
      {category.title}
    </Link>
  );

  return (
    <div className="h-12 shadow-xl px-6 mb-12 fixed w-full z-10 bg-white">
      <div className="flex h-full items-center gap-3">
        <a href="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </a>
        <div className="h-6 w-px bg-gray-200" />
        {isLoading ? (
          <>
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          categories?.map(renderCategory)
        )}
      </div>
    </div>
  );
};
