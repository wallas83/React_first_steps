// import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({ category }) => {

    //llaves es por que desestructura un objeto
    const {images, isLoading} = useFetchGifts(category);
    
   
    console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>
            {   //este no es tan preferible ya que votar por else el null no es faborablw
                // isLoading 
                // ? (<h2> Cargando...</h2>)
                // : null
                // hace lo mismo que arriba forma corta del if en react 
                isLoading && (<h2> Cargando...</h2>)
            }
            <div className = "card-grid">
                {
                    // images.map( image => (
                    //     <li key={image.id}>{image.title}</li>
                    // ))
                    images.map( (image) => (
                        <GifItem key = {image.id}
                        //el espread aca sirve para exparsir los valores que recupera 
                       {...image}
                        />
                    ))

                    }
            </div>

        </>
    )
}
