import { FC } from "react";
import { MenuItemLoading } from "../menu-item-loading/menu-item-loading.component";

interface Props {
  items: number;
}

export const MenuItemListLoading: FC<Props> = ({ items }) => {
  const renderMenuItem = (_: number, i: number) => (
    <MenuItemLoading key={`menu-loading-${i}`} />
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {new Array(items).fill(1).map(renderMenuItem)}
    </div>
  );
};
