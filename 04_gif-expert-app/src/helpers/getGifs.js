// es mejor sacar la funcnion para que no se vuelva a disparar 
// nunca se debe usar una funcionen una funcional component, se debe usar aun hook especial 
//
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=65f6l8O3UTK2q15V0dwhZv8JZGcJZn5v&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json(url);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url


    }));

    console.log(gifs);
    return gifs;
}