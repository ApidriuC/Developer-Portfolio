import { ReactNode } from "react"

/* ────────────────────────────  Notifications  ──────────────────────────── */

export interface Notification {
    message: string
}

export interface NotificationProviderProps {
    children: ReactNode
}

export interface NotificationContextProps {
    showNotification: (message: string, duration?: number) => void;
}

/* ────────────────────────────  Icons  ──────────────────────────── */

export type IconName =
    | 'home' | 'user' | 'briefcase' | 'layers' | 'code' | 'folder' | 'mail'
    | 'sun' | 'moon' | 'globe' | 'github' | 'linkedin' | 'arrow-up-right'
    | 'shield' | 'cloud' | 'database' | 'cpu' | 'plug' | 'boxes'
    | 'award' | 'graduation' | 'calendar' | 'rocket' | 'sparkles'
    | 'download' | 'send' | 'lock' | 'lock-open' | 'star' | 'close'
    | 'git-branch' | 'terminal' | 'menu' | 'chevron-down' | 'chevron-up';

/* ────────────────────────────  Skills  ──────────────────────────── */

export interface SkillBoxProps {
    label: string,
    sourceLink: string,
    sourceImage: string
}

export interface ContainerSkillProps {
    label: string,
    skills: SkillBoxProps[]
}

/* ────────────────────────────  Projects  ──────────────────────────── */

export type ProjectVisibility = 'public' | 'private';

export interface TagProps {
    alt: string,
    image: string
}

export interface Project {
    title: string,
    /** i18n key that overrides `title` when the name is translatable */
    titleKey?: string,
    /** i18n key for a short description (optional) */
    descKey?: string,
    link?: string,
    image: string,
    visibility: ProjectVisibility,
    /** custom CSS gradient applied behind the artwork */
    gradient?: string,
    tags: TagProps[]
}

/* ────────────────────────────  Education  ──────────────────────────── */

export type EducationKind = 'degree' | 'postgrade' | 'certification' | 'event';
export type EducationStatus = 'done' | 'in-progress';

export interface EducationItem {
    year: string,
    kind: EducationKind,
    status: EducationStatus,
    /** i18n keys */
    titleKey: string,
    placeKey: string,
    detailsKey: string,
    support?: string
}

/* ────────────────────────────  Experience  ──────────────────────────── */

export interface ExperienceItem {
    period: string,
    company: string,
    current?: boolean,
    /** i18n keys */
    roleKey: string,
    descKey?: string
}

/* ────────────────────────────  Services  ──────────────────────────── */

export interface ServiceItem {
    icon: IconName,
    /** i18n keys */
    titleKey: string,
    descKey: string
}

/* ────────────────────────────  Stats  ──────────────────────────── */

export interface StatItem {
    icon: IconName,
    value: number,
    suffix?: string,
    /** i18n key */
    labelKey: string
}

/* ────────────────────────────  Socials  ──────────────────────────── */

export interface SocialLink {
    id: number,
    icon: IconName,
    alt: string,
    href: string
}

/* ────────────────────────────  Layout / misc  ──────────────────────────── */

export interface FormProps {
    className?: string,
    children: ReactNode,
    onClose: () => void
}

export interface SectionFrameProps {
    id: string,
    className?: string,
    children: ReactNode
}
