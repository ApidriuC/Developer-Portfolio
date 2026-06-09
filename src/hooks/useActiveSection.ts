import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección actualmente "activa" (la que cruza el centro
 * del viewport) observando los elementos indicados con IntersectionObserver.
 * Útil para resaltar el enlace correspondiente en la barra de navegación.
 */
export const useActiveSection = (ids: string[]): string => {
    const [active, setActive] = useState(ids[0] ?? '');

    useEffect(() => {
        const elements = ids
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            // Banda fina en el centro vertical: la sección que la cruza es la activa.
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
};
