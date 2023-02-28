// import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({ category }) => {


    const {images, isLoading} = useFetchGifts(category);
   
    console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>
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
