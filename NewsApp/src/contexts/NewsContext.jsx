import { createContext, useState } from "react";


export const NewsContext = createContext({});

const NewsProvider = ({children}) => {

    const [query, setQuery] = useState("");
    // const [newsArr, setNewsArr] = useState([]);

    const contextValue = {query, setQuery};

    return (
        <NewsContext.Provider value={contextValue}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;