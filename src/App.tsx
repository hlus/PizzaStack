import React from "react";

import { MenuPage } from "@app/modules/menu/pages/menu.page";
import { Header } from "@app/common/components/header/header.component";
import { Footer } from "@app/common/components/footer/footer.component";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mx-12 mb-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
