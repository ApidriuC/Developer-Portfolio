import { IconName } from 'types/props';

interface IconProps {
    name: IconName;
    size?: number;
    className?: string;
}

/** Iconos SVG inline (estilo lucide). Añadir un icono = nueva entrada en `paths`. */
const paths: Record<IconName, JSX.Element> = {
    home: <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>,
    layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" />,
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></>,
    github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v6M8 7v.01M12 16v-3a2 2 0 0 1 4 0v3m0-3v3" /></>,
    'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
    shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />,
    cloud: <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7Z" />,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 9h6v6H9zM9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2" /></>,
    plug: <path d="M9 2v6m6-6v6M6 8h12v3a6 6 0 0 1-12 0V8Zm6 9v5" />,
    boxes: <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4" />,
    award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
    graduation: <path d="m22 9-10-4L2 9l10 4 10-4Zm-4 2v5c0 1.7-2.7 3-6 3s-6-1.3-6-3v-5" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4m8-4v4" /></>,
    rocket: <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 11a8 8 0 0 1 9-7 8 8 0 0 1-7 9l-3 3-2-2 3-3Zm5-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />,
    sparkles: <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3ZM18 15l.8 2L21 17.8 19 18.6 18 21l-.8-2.4L15 17.8l2.2-.8L18 15Z" />,
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
    send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
    'lock-open': <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" /></>,
    star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    'git-branch': <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="6" r="3" /><path d="M6 9v6m12-6a9 9 0 0 1-9 9" /></>,
    terminal: <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 4 3 3-3 3m6 0h4" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    'chevron-down': <path d="m6 9 6 6 6-6" />,
    'chevron-up': <path d="m6 15 6-6 6 6" />,
};

/** Iconos de marca que usan relleno en lugar de trazo. */
const filled: Partial<Record<IconName, boolean>> = { github: true };

export const Icon = ({ name, size = 22, className = '' }: IconProps) => {
    const isFilled = filled[name];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={isFilled ? 'currentColor' : 'none'}
            stroke={isFilled ? 'none' : 'currentColor'}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {paths[name]}
        </svg>
    );
};
