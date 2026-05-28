import { useTranslation } from 'react-i18next';
import { CONTACT_EMAIL } from '../../data';
import { Icon } from './Icon';

interface RequestCvButtonProps {
    /** 'primary' (gradiente) | 'ghost' (vidrio) */
    variant?: 'primary' | 'ghost';
    className?: string;
}

/**
 * Botón "Solicitar mi hoja de vida": abre el cliente de correo del visitante
 * con un asunto y cuerpo prellenados dirigidos a Andrés.
 */
export const RequestCvButton = ({ variant = 'primary', className = '' }: RequestCvButtonProps) => {
    const { t } = useTranslation();

    const subject = encodeURIComponent(t('cv-email-subject'));
    const body = encodeURIComponent(t('cv-email-body'));
    const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    return (
        <a
            href={href}
            className={`${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`}
            title={t('cv-request')}
        >
            <Icon name="send" size={18} />
            {t('cv-request')}
        </a>
    );
};
