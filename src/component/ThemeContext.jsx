import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    const [state, setState] = useState(true);

    const changemod = () => {
        console.log("modchanged")
        setState(!state); 
    }

    return (
        <ThemeContext.Provider value={{ state, changemod }}>
            {children}
        </ThemeContext.Provider>
    )
}