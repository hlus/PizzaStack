import { useGetMenuQuery } from "@app/core/types";
import {
  ShowInfo,
  ShowInfoType,
} from "@app/common/components/show-info/show-info.component";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuItemListLoading } from "@app/modules/menu/components/menu-item-list-loading/menu-item-list-loading.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return (
      <ShowInfo type={ShowInfoType.Error}>
        <>
          <p>oops an error occurred 😢</p>
          <p>try again later</p>
        </>
      </ShowInfo>
    );
  }

  if (loading) {
    return <MenuItemListLoading items={10} />;
  }

  if (!data) {
    return (
      <ShowInfo type={ShowInfoType.Info}>
        <p>Menu is empty 🍽️</p>
      </ShowInfo>
    );
  }

  return <MenuList items={data!.menu} />;
};
