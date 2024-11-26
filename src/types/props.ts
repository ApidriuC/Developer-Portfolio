import { ReactNode } from "react"

export interface NotificationProviderProps {
    children: ReactNode
}

export interface Notification {
    message: string
}

export interface BaseProps {
    label?: string,
    value?: string,
    className?: string,
    action?: () => void
}

export interface ImageReferenceProps {
    id: number,
    alt: string,
    href: string,
    icon: string
}

export interface CardProps {
    title: string,
    width: number,
    height: number,
    link?: string,
    image: string,
    tags: TagProps[]
}

export interface TagProps {
    alt: string,
    image: string
}

export interface SkillBoxProps {
    label: string,
    sourceLink: string,
    sourceImage: string
}

export interface ContainerSkillProps {
    label: string,
    skills: SkillBoxProps[]
}

export interface PopupProps {
    isVisible: boolean,
    title: string,
    textContent: string
}

export interface EducationBoxProps extends BaseProps {
    year: string,
    description: string
}