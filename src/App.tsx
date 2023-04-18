import { useState } from 'react'
import './App.css'
import './categories.styles.scss';
import AllCategories from './components/all-categories/all-categories.component';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'resources/taylor-brandon-CNJNvwvhnMc-unsplash.jpg'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'resources/alternate-jacket.jpeg'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'resources/shoes.jpeg'
    },
    {
      id: 4,
      title: `Women's`,
      imageUrl: 'resources/womens.jpeg'
    },
    {
      id: 5,
      title: `Men's`,
      imageUrl: 'resources/mens.jpeg'
    },
    
  ];

  return (
    <>
      <AllCategories />
    </>
  )


}

export default App
