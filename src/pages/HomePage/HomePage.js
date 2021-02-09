import React from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import ShopAdvantages from '../../components/ShopAdvantages/ShopAdvantages';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductList />
      <ShopAdvantages />
    </>
  );
};

export default HomePage;
