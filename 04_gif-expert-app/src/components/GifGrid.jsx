import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    // es lo mismo que arriba pero usando .then
    //    useEffect(() => {
    //         getGifs(category)
    //             .then( newImages => setImages(newImages) );
    //    })
    // si el use efects esta con llaves en vacio quiere decir que se llamara solo una vex
    // que se crea y se construe
    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    // images.map( image => (
                    //     <li key={image.id}>{image.title}</li>
                    // ))
                    images.map( ({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>

        </>
    )
}
