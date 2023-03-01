import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (onNewCategoryss) => {

    if (categories.includes(onNewCategoryss)) return;
    //es mejor usar otr array para redibujar  por eso se usa spread
    setCategories([onNewCategoryss, ...categories]);
    console.log(onNewCategoryss);
  }
  return (
    <>
      {/* titulo */}
      <h1>Gifsdsddddd</h1>
      {/* Input */}
      {/* <AddCategory onAddCategoriesSet ={setCategories}></AddCategory> */}
      {/* en eventos es mejor usa on */}
      <AddCategory onNewCategory={event => onAddCategory(event)}></AddCategory>
      {/* listado de Gif */}
      {/* <button onClick={onAddCategory}> agregar</button> */}

      {categories.map(category => (

        <GifGrid
          key={category}
          category={category} />

      ))
      }
      {/* <li> ABC</li> */}

      {/* Gif Item */}
    </>
  );
}
