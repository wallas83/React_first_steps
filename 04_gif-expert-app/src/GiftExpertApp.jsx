import { useState } from "react";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One puchi','puchichu']);
  return (
    <>
    {/* titulo */}
    <h1>Gifssdd</h1>
    {/* Input */}
    {/* listado de Gif */}
    <ol>
        {categories.map( categorie => {
        return<li key={categorie}>{categorie}</li>
        })
        }
        {/* <li> ABC</li> */}
    </ol>
    {/* Gif Item */}
    </>
  );
}
