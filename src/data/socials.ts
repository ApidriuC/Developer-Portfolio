import { SocialLink } from 'types/props';

/** Email público para el contacto directo y el botón "Solicitar mi hoja de vida". */
export const CONTACT_EMAIL = 'andresfloncam@gmail.com';

/** Perfil público de GitHub (usado en redes y en el botón "Ver más" de Proyectos). */
export const GITHUB_URL = 'https://github.com/ApidriuC';

export const socials: SocialLink[] = [
    {
        id: 0,
        icon: 'github',
        alt: 'GitHub — ApidriuC',
        href: GITHUB_URL
    },
    {
        id: 1,
        icon: 'linkedin',
        alt: 'LinkedIn — Andrés Felipe Londoño Campos',
        href: 'https://www.linkedin.com/in/andr%C3%A9s-felipe-londo%C3%B1o-campos-b03741222/'
    },
    {
        id: 2,
        icon: 'mail',
        alt: `Email — ${CONTACT_EMAIL}`,
        href: `mailto:${CONTACT_EMAIL}`
    }
];
