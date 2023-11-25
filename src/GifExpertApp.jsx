import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    // categories.push('OnePiece') // ! No usar más, esto muta el objeto
    setCategories([ newCategory, ...categories ])
    // setCategories( categories => [...categories, 'One Piece'] ) // * Otra manera de hacerlo
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
        onNewCategory={onAddCategory}
      />
      
      { 
        categories.map(category => 
          <GifGrid key={ category } category={ category } />
        ) 
      }

    </>
  )
}
