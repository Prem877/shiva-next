"use client"

import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemProvider = ({ children }) => {

    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`} >
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}