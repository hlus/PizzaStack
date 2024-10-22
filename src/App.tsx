import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useGetCategoriesQuery } from '@app/core/types';
import { LoginPage } from './modules/auth/pages/login.page';
import { MenuPage } from '@app/modules/menu/pages/menu.page';
import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';

export const App: React.FC = () => {
  const { data, loading } = useGetCategoriesQuery();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    isLoggedInReactive(!!jwt);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <div className="mx-12 my-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
