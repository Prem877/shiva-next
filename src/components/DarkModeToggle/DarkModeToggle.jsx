import React from 'react'
import styles from './darkmodeToggle.module.css'
import { useThemeContext } from '../../../context/ThemContext'

const DarkModeToggle = () => {

    const { toggle, mode } = useThemeContext();
    // const mode = "dark"

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
        </div>
    )
}

export default DarkModeToggle
