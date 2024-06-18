import React from "react";

import { Pizza } from "@app/modules/menu/types/pizza";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";


interface Props {
  items: Pizza[];
}

export const MenuList: React.FC<Props> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          key={`pizza-${pizza.id}`}
          imagePath={"/assets/pizza/" + image}
          {...pizza}
        />
      ))}
    </div>
  );
};
