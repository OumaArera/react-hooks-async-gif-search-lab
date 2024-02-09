import React from "react";

const GifSearch = ({ onSubmit, query, setQuery }) =>{
    const handleChange = event =>{
        setQuery(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault();
        onSubmit(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Enter your query"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default GifSearch