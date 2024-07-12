import React from "react";

import { Menu, useGetSettingsQuery } from "@app/core/types";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";

interface Props {
  items: Menu[];
}

export const MenuList: React.FC<Props> = ({ items }) => {
  const { data } = useGetSettingsQuery({ fetchPolicy: "cache-only" });
  const renderMenuItem = ({ image, ...pizza }: Menu) => (
    <MenuItem
      key={`pizza-${pizza.id}`}
      image={image}
      fitImage={pizza.category_id === data?.settings[0].drinks_category}
      {...pizza}
    />
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map(renderMenuItem)}
    </div>
  );
};
