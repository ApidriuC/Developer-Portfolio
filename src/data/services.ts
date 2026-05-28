import { ServiceItem } from 'types/props';

/**
 * Áreas de especialidad (derivadas de las habilidades técnicas del CV).
 * Para añadir un servicio: agrega un objeto con un icon válido (ver IconName en types/props.ts)
 * y sus claves i18n de título/descripción.
 */
export const services: ServiceItem[] = [
    { icon: 'code', titleKey: 'svc-web-title', descKey: 'svc-web-desc' },
    { icon: 'plug', titleKey: 'svc-api-title', descKey: 'svc-api-desc' },
    { icon: 'database', titleKey: 'svc-db-title', descKey: 'svc-db-desc' },
    { icon: 'cloud', titleKey: 'svc-cloud-title', descKey: 'svc-cloud-desc' },
    { icon: 'cpu', titleKey: 'svc-ai-title', descKey: 'svc-ai-desc' },
    { icon: 'boxes', titleKey: 'svc-micro-title', descKey: 'svc-micro-desc' }
];
