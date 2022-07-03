import { createContext, useState } from "react"

 export const SearchContext = createContext(null)


function Search({ children }) {
    const [searching, setSearching] = useState(null)
    return (
        <SearchContext.Provider value={{searching,setSearching}}>
            {children}
        </SearchContext.Provider>
    )
}

export default Search
