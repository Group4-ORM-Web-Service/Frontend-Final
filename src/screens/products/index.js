/* eslint-disable no-unused-vars */
import React from 'react';
import FilterByItems from './components/FilterByItems';
import ProductList from './components/ProductList';
import Sidebar from '../../layouts/sidebar';

const ProductPage = () => {
  const [listCheckBoxItems, setListCheckBoxItems] = React.useState([
    {
      primary: 'Brunch this weekend?',
    },
    {
      primary: 'Summer BBQ',
    },
    {
      primary: 'Oui Oui',
    },
  ]);

  const [relatedString] = React.useState([
    {
      name: 'Electronis',
    },
    {
      name: 'Smartwatches',
    },
    {
      name: 'Oui Oui',
    },
  ]);

  const [listItems] = React.useState([
    {
      avatar: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      primary: 'Phone',
      secondary: {
        name: 'iPhone 19 pro max ultral',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
      avatar: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      primary: 'iPad',
      secondary: {
        name: 'iPad pro m4',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
      avatar: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      primary: 'Phone',
      secondary: {
        name: 'iPgone 19 pro max ultral',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
      avatar: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      primary: 'Canon Camera',
      secondary: {
        name: 'Canon Camera EOS 2000',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
    {
      avatar: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      primary: 'Phone',
      secondary: {
        name: 'iPgone 19 pro max ultral',
        price: '$590.50',
        originalPrice: '$1,128.00',
        rating: 4.9,
        orders: 154,
        description:
          'The largest Canon Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned.',
      },
    },
  ]);
  return (
    <>
      <Sidebar pageName='Products' />
      <div className='product-component' style={{ marginTop: 50 }}>
        <div className='container-left-cell'>
          <ProductList listItems={listItems} />
        </div>
        <div className='container-right-cell'>
          <FilterByItems listItems={listCheckBoxItems} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
