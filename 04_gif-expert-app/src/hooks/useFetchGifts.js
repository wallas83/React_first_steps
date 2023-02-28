import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifts = (category) => {


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
    }, []);

    return {
        images: images,
        isLoading: true
    }
}
