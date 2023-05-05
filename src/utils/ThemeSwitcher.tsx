import { useState, useEffect, SyntheticEvent } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"

import './scss/_theme-switcher.scss'

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(true)

    function handleCheckbox(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement
        toggleDarkMode(target.checked)
    }
    function toggleDarkMode(value: boolean) {
        setDarkMode(value)
        localStorage.setItem('dark-mode', (value ? 'on' : 'off'))
        document.documentElement.setAttribute('dark-mode', (value ? 'on' : 'off'))
    }
    useEffect(() => {
        const darkModeLocalStroage = localStorage.getItem('dark-mode') || 'on';
        toggleDarkMode(darkModeLocalStroage === 'on')
    }, [])

    return (
        <div className="theme-switcher-container">
            <label htmlFor="theme-switcher">
                <div className="icon dark">
                    <MdDarkMode />
                </div>
                <div className="icon light">
                    <MdLightMode />
                </div>
                <input type="checkbox" name="theme-switcher" id="theme-switcher" checked={darkMode} onChange={e => handleCheckbox(e)} />
            </label>
        </div>
    )
}

export default ThemeSwitcher