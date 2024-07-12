import React from "react";

import { useGetCategoriesQuery } from "@app/core/types";
import { MenuPage } from "@app/modules/menu/pages/menu.page";
import { Header } from "@app/common/components/header/header.component";
import { Footer } from "@app/common/components/footer/footer.component";

export const App: React.FC = () => {
  const { data, loading } = useGetCategoriesQuery();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <div className="mx-12 my-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
