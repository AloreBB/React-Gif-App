
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sgzTPrT33SPM6cPxoKJexeSG0L4CslvS&q=${category}&limit=10`;

    const res = await fetch(url);
    const { data } = await res.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }))

    return gifs;
};