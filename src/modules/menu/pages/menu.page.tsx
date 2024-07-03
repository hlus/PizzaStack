import { useGetMenuQuery } from "@app/core/types";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return <h1>😭 Error: {error.message}</h1>;
  }

  if (loading && !data) {
    return <h1>Loading 🥠</h1>;
  }

  if (!data) {
    return <h1>Menu is empty 🍽️</h1>;
  }

  return <MenuList items={data.menu} />;
};
