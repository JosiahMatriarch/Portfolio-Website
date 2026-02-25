import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return <button> {isDarkMode ? <SunIcon /> : <MoonIcon />}</button>
}