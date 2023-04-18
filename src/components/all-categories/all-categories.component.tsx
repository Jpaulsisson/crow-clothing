import './all-categories.styles.scss'
import React from 'react'
import CategoryItem from '../category-item/category-item.component'


function AllCategories() {

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
      <div className="allCategories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    </>
  )
}

export default AllCategories
