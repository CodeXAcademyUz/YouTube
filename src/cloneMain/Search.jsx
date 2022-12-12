import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
const handleChange = (event) => setSearchTerm(event.target.valeu)

const keyPress = (event) => {
    if (event  === "Enter") {
        onsubmit={searchTerm}
    }
}



    return(
        <>

        </>
    )
};

export default Search