import React from 'react';
import { Link } from 'react-router-dom';

import { Categories } from '@app/core/types';
import { HeaderCategoryLink } from '../header-category-link/header-category-link.component';
import { Skeleton } from '../skeleton/skeleton.component';
import { Button, ButtonSize } from '../button/button.component';
import { UserDropdown } from '@app/modules/menu/auth/components/user-dropdown/user-dropdown.component';

type Category = Omit<Categories, 'menu_items'>;

interface Props {
  isLoading?: boolean;
  isLoggedIn?: boolean;
  categories?: Category[];
}

export const Header: React.FC<Props> = ({ isLoading, isLoggedIn, categories }) => {
  const renderCategory = (category: Category) => (
    <HeaderCategoryLink key={`header-category-${category.id}`} url={`#${category.slug}`}>
      {category.title}
    </HeaderCategoryLink>
  );

  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-10 bg-white flex justify-between items-center">
      <div className="flex h-full items-center gap-3">
        <a href="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </a>
        <div className="h-6 w-px bg-gray-200" />
        {isLoading ? (
          <>
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          categories?.map(renderCategory)
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <UserDropdown />
        ) : (
          <Link to="/login">
            <Button size={ButtonSize.SM}>Війти</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
