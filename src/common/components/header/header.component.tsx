import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { Categories } from '@app/core/types';
import { Skeleton } from '../skeleton/skeleton.component';
import { Button, ButtonSize } from '../button/button.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { HeaderCategoryLink } from '../header-category-link/header-category-link.component';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';

type Category = Omit<Categories, 'menu_items' | 'menu_items_aggregate'>;

interface Props {
  isLoading?: boolean;
  categories?: Category[];
}

export const Header: React.FC<Props> = ({ isLoading, categories }) => {
  const isLoggedIn = useReactiveVar(isLoggedInReactive);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  const renderCategory = (category: Category) => (
    <HeaderCategoryLink key={`header-category-${category.id}`} url={`#${category.slug}`}>
      {category.title}
    </HeaderCategoryLink>
  );

  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-10 bg-white flex justify-between items-center">
      <div className="flex h-full items-center gap-3">
        <Link to="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </Link>
        {isLoading ? (
          <>
            <div className="h-6 w-px bg-gray-200" />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          isHomePage && (
            <>
              <div className="h-6 w-px bg-gray-200" />
              {categories?.map(renderCategory)}
            </>
          )
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <UserDropdown />
        ) : (
          !isLoginPage && (
            <Link to="/login">
              <Button size={ButtonSize.SM}>Війти</Button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
