import React from "react";

import { Pizza } from "@app/modules/menu/types/pizza";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";

interface Props {
  items: Pizza[];
}

export const MenuList: React.FC<Props> = ({ items }) => {
  const renderMenuItem = ({image, ...pizza}: Pizza) => (
    <MenuItem key={`pizza-${pizza.id}`} image={image} {...pizza} />
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map(renderMenuItem)}
    </div>
  );
};
