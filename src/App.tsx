import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useGetCategoriesQuery } from '@app/core/types';
import { LoginPage } from './modules/auth/pages/login.page';
import { MenuPage } from '@app/modules/menu/pages/menu.page';
import { ProfilePage } from './modules/user/pages/profile.page';
import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { PrivateRoute } from './common/components/private-route/private-route.component';
import { CartSidebar } from './modules/cart/components/cart-sidebar/cart-sidebar.component';

export const App: React.FC = () => {
  const { data, loading } = useGetCategoriesQuery();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    isLoggedInReactive(!!jwt);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar
        items={[
          {
            title: 'Піца баребкю',
            image: 'menu/menu-1720024683',
            count: 2,
            price: 150,
          },
          {
            title: 'Піца qweqw',
            image: 'menu/menu-1720024683',
            count: 2,
            price: 100,
          },
          {
            title: 'Піца 123',
            image: 'menu/menu-1720024683',
            count: 1,
            price: 75,
          },
          {
            title: 'Піца 123',
            image: 'menu/menu-1720024683',
            count: 1,
            price: 75,
          },
          {
            title: 'Піца 123',
            image: 'menu/menu-1720024683',
            count: 1,
            price: 75,
          },
          {
            title: 'Бонаква',
            image: 'menu/menu-1720770982',
            count: 1,
            price: 57,
          },
        ]}
      />
      <div className="mx-12 my-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
