import {createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContectProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
       JSON.parse(localStorage.getItem("darkMode")) || false)

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMOde", darkMode)
    }, [darkMode])
    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    )
}