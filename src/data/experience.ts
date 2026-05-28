import { ExperienceItem } from 'types/props';

/**
 * Trayectoria laboral (orden: más reciente primero).
 * Para añadir un empleo: agrega un objeto a este array.
 *  - current: true   -> muestra "Presente" como fin del periodo y resalta la tarjeta
 *  - role/desc: claves i18n (en es.json / en.json)
 */
export const experienceItems: ExperienceItem[] = [
    {
        period: '2025',
        company: 'I.A.S Software',
        current: true,
        roleKey: 'exp-ias-role',
        descKey: 'exp-ias-desc'
    },
    {
        period: '2022 — 2025',
        company: 'Sistemas y Computadores S.A.',
        roleKey: 'exp-syc-role',
        descKey: 'exp-syc-desc'
    },
    {
        period: '2022',
        company: 'Sistemas y Computadores S.A.',
        roleKey: 'exp-intern-role',
        descKey: 'exp-intern-desc'
    }
];
