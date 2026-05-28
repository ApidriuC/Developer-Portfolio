import * as assets from '../assets';
import { EducationItem } from 'types/props';

/**
 * Para añadir un estudio/certificación: agrega un objeto a este array.
 *  - kind:   'degree' | 'postgrade' | 'certification' | 'event'
 *  - status: 'done' | 'in-progress'   ('in-progress' muestra el badge "En curso")
 *  - support: imagen del soporte/certificado (opcional)
 *  - title/place/details: claves i18n (en es.json / en.json)
 */
export const educationItems: EducationItem[] = [
    {
        year: '2026',
        kind: 'postgrade',
        status: 'in-progress',
        titleKey: 'edu-secesp-title',
        placeKey: 'edu-secesp-place',
        detailsKey: 'edu-secesp-details'
    },
    {
        year: '2026',
        kind: 'certification',
        status: 'in-progress',
        titleKey: 'edu-aws-title',
        placeKey: 'edu-aws-place',
        detailsKey: 'edu-aws-details'
    },
    {
        year: '2023',
        kind: 'degree',
        status: 'done',
        titleKey: 'edu-eng-title',
        placeKey: 'edu-eng-place',
        detailsKey: 'edu-eng-details',
        support: assets.SupActaGrado
    },
    {
        year: '2023',
        kind: 'certification',
        status: 'done',
        titleKey: 'edu-mintic-title',
        placeKey: 'edu-mintic-place',
        detailsKey: 'edu-mintic-details',
        support: assets.SupMintic
    },
    {
        year: '2023',
        kind: 'certification',
        status: 'done',
        titleKey: 'edu-veracode-title',
        placeKey: 'edu-veracode-place',
        detailsKey: 'edu-veracode-details',
        support: assets.SupVeracode
    },
    {
        year: '2021',
        kind: 'event',
        status: 'done',
        titleKey: 'edu-congress-title',
        placeKey: 'edu-congress-place',
        detailsKey: 'edu-congress-details',
        support: assets.SupCongresoIng
    }
];
