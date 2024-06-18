import React from 'react';
import { Header } from './common/components/header/header.component';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className='font-bold text-3xl text-red-500'>🍕 PizzaStack</h1>
    </div>
  );
}
