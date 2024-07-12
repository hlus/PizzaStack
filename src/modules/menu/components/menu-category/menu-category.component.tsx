import { FC } from "react";

import { Categories } from "@app/core/types";
import { MenuList } from "../menu-list/menu-list.component";

interface Props {
  category: Categories;
}

export const MenuCategory: FC<Props> = ({ category }) => (
  <div className="w-full flex flex-col gap-12" id={category.slug}>
    <div className="flex flex-col gap-1 items-center">
      <h2 className="relative font-bold text-2xl after:content-[''] after:block after:absolute after:w-full after:h-1 after:bg-amber-400">
        {category.title}
      </h2>
    </div>
    <MenuList items={category.menu_items} />
  </div>
);
