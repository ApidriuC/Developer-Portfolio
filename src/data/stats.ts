import { StatItem } from 'types/props';
import { educationItems } from './education';
import { projects } from './projects';
import { containersSkills } from './skills';

/** Año en que inició la trayectoria profesional (CV: prácticas 2022). */
const CAREER_START = 2022;

const yearsOfExperience = Math.max(1, new Date().getFullYear() - CAREER_START);
const technologiesCount = containersSkills.reduce((total, c) => total + c.skills.length, 0);

/**
 * Métricas con contadores animados. Los valores que se derivan del contenido
 * (proyectos, tecnologías, estudios) se recalculan solos al editar los otros archivos.
 */
export const stats: StatItem[] = [
    { icon: 'calendar', value: yearsOfExperience, suffix: '+', labelKey: 'stat-years' },
    { icon: 'folder', value: projects.length, suffix: '+', labelKey: 'stat-projects' },
    { icon: 'layers', value: technologiesCount, suffix: '+', labelKey: 'stat-technologies' },
    { icon: 'award', value: educationItems.length, suffix: '+', labelKey: 'stat-studies' }
];
