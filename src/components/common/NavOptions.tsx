import { useTranslation } from 'react-i18next';
import { Language } from 'types/general';
import { IconName } from 'types/props';
import { useTheme } from '../../hooks/useTheme';
import { useNotification } from './NotificationComponent';
import { Icon } from './Icon';
import './NavOptions.css';

const goToScroll = (id: string, position: ScrollLogicalPosition = 'center') => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ block: position, behavior: 'smooth' });
};

interface NavLink {
    icon: IconName;
    labelKey: string;
    target: string;
    position?: ScrollLogicalPosition;
}

const navLinks: NavLink[] = [
    { icon: 'home', labelKey: 'option-home-label', target: 'intro' },
    { icon: 'user', labelKey: 'option-about-me-label', target: 'about-me', position: 'start' },
    { icon: 'git-branch', labelKey: 'option-experience-label', target: 'experience-me', position: 'start' },
    { icon: 'rocket', labelKey: 'option-services-label', target: 'services-me', position: 'start' },
    { icon: 'code', labelKey: 'option-skills-label', target: 'skills-me', position: 'start' },
    { icon: 'folder', labelKey: 'option-projects-label', target: 'projects-me', position: 'start' },
    { icon: 'mail', labelKey: 'option-contact-label', target: 'contact-me' }
];

export const NavOptions = () => {
    const { t, i18n } = useTranslation();
    const { showNotification } = useNotification();
    const { theme, toggleTheme } = useTheme();

    const changeLanguage = () => {
        const newLang: Language = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        showNotification(t('notification-lng-change'));
    };

    const handleTheme = () => {
        toggleTheme();
        showNotification(t('notification-theme-change'));
    };

    return (
        <div className="statusbar" role="navigation" aria-label="Navegación principal">
            <div className="sb-group sb-left">
                <span className="sb-brand"><Icon name="terminal" size={14} />andres@portfolio</span>
                <span className="sb-item sb-branch"><Icon name="git-branch" size={14} />main</span>
            </div>

            <nav className="sb-group sb-nav">
                {navLinks.map(link => (
                    <button
                        key={link.target}
                        type="button"
                        className="sb-item"
                        title={t(link.labelKey)}
                        onClick={() => goToScroll(link.target, link.position)}
                    >
                        <Icon name={link.icon} size={15} />
                        <span className="sb-label">{t(link.labelKey)}</span>
                    </button>
                ))}
            </nav>

            <div className="sb-group sb-right">
                <button type="button" className="sb-item" title={t('option-theme-label')} onClick={handleTheme}>
                    <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
                </button>
                <button type="button" className="sb-item" title={t('option-language-label')} onClick={changeLanguage}>
                    <Icon name="globe" size={15} />
                    <span className="sb-lang">{i18n.language.toUpperCase()}</span>
                </button>
                <span className="sb-item sb-live"><span className="live-dot" />Live</span>
            </div>
        </div>
    );
};
