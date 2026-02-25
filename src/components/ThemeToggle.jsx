import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <button> 
            {""}
            {isDarkMode ? (
                <SunIcon className='h-6 w-6 text-yellow-300'/>
            ) : (
                <MoonIcon className='h-6 w-6 text-blue-900'/>
            )}
        </button>
    );
}