import { useCallback, useEffect, useState } from 'react';
import { Theme } from 'types/general';

const STORAGE_KEY = 'theme';

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark';

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

/**
 * Tema claro/oscuro persistente. Aplica `data-theme` en <html> y lo guarda en localStorage.
 * Solo lo consume NavOptions (toggle); el resto del estilado reacciona vía tokens CSS.
 */
export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(
        () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark')),
        []
    );

    return { theme, toggleTheme };
};
