import { useGetMenuQuery } from "@app/core/types";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuItemListLoading } from "@app/modules/menu/components/menu-item-list-loading/menu-item-list-loading.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return <h1>😭 Error: {error.message}</h1>;
  }

  if (loading) {
    return <MenuItemListLoading items={10} />;
  }

  if (!data) {
    return <h1>Menu is empty 🍽️</h1>;
  }

  return <MenuList items={data.menu} />;
};
