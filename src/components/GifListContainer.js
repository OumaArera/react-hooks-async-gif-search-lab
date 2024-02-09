import React, { useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
const Url = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

const GifListContainer = () =>{
    const [gif, setGif] = useState([])
    const [query, setQuery] = useState(" ")

    useEffect(() =>{
        const fetchData = async url =>{
            try {
                const response = await fetch(url)
                const data = await response.json()
                const firstThreeGifs = data.data.slice(0, 3);
                setGif(firstThreeGifs)
            }catch(err){console.log(err)}

        }
        if (query){
            fetchData(Url)
        }  
    }, [query])

    const handleQuery = search =>{
        setQuery(search)
    }

    return (
        <div>
            <GifSearch onSubmit={handleQuery} query={query} setQuery={setQuery}/>
            <GifList gifs={gif} />
        </div>
    )
}
export default GifListContainer