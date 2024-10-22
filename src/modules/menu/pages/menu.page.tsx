import { Helmet } from 'react-helmet';

import { useGetMenuQuery, useGetSettingsQuery } from '@app/core/types';
import { MenuCategory } from '../components/menu-category/menu-category.component';
import { ShowInfo, ShowInfoType } from '@app/common/components/show-info/show-info.component';
import { MenuItemListLoading } from '@app/modules/menu/components/menu-item-list-loading/menu-item-list-loading.component';

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();
  const { loading: loadingSettings } = useGetSettingsQuery();

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

  if (loading || loadingSettings) {
    return <MenuItemListLoading items={10} />;
  }

  if (!data) {
    return (
      <ShowInfo type={ShowInfoType.Info}>
        <p>Menu is empty 🍽️</p>
      </ShowInfo>
    );
  }

  return (
    <>
      <Helmet title="Menu" />
      <div className="flex flex-col gap-12">
        {data.categories.map((category) => (
          <MenuCategory key={`category-${category.id}`} category={category} />
        ))}
      </div>
    </>
  );
};
