import React from "react";

import pizzaMenu from "@app/mocks/pizza.json";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";

export const MenuList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {pizzaMenu.map(({image, ...pizza}) => (
        <MenuItem imagePath={'/assets/pizza/' + image} {...pizza} />
      ))}
    </div>
  );
};
