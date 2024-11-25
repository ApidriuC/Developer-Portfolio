import './NavOptions.css';
import { useTranslation } from 'react-i18next';
import { useNotification } from '../common';

const goToScroll = (id, position = 'center') => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ block: position, behavior: 'smooth' });
}

export default function NavOptions() {
    const { t, i18n } = useTranslation();
    const { showNotification } = useNotification();

    const changeLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        showNotification(t('notification-lng-change'));
    };

    const changeTheme = () => {
        document.body.classList.toggle('dark-theme');
        showNotification(t('notification-theme-change'));
    }

    const options = [
        { className: 'icon-character', label: t('option-home-label'), action: () => goToScroll('intro') },
        { className: 'icon-person', label: t('option-about-me-label'), action: () => goToScroll('about-me') },
        { className: 'icon-code', label: t('option-skills-label'), action: () => goToScroll('skills-me', 'start') },
        { className: 'icon-book', label: t('option-projects-label'), action: () => goToScroll('projects-me', 'start') },
        { className: 'icon-message', label: t('option-contact-label'), action: () => goToScroll('contact-me') },
        { className: 'theme-icon', label: t('option-theme-label'), action: changeTheme },
        { label: t('option-language-label'), value: t('option-language-value'), action: changeLanguage },
    ];

    return (
        <>
            <div className='navBar-bg' />
            <div className='navBar-float shadow-lg'>
                {options.map((option, index) => (
                    <OptionControl
                        key={index}
                        label={option.label}
                        value={option.value}
                        action={option.action}
                        className={option.className}
                    />
                ))}
            </div>
        </>
    );
}

const OptionControl = ({ value, label, action, className }) => (
    <div className='option-navBar'>
        <label className='option md:text-base xs:text-xs'>{label}</label>
        <button
            onClick={action}
            className={`${className} h-[5.5vh] w-[5.5vh] md:h-[5.5vh] md:w-[5vh] xs:h-[4.5vh] xs:w-[4.5vh]`}>
            {value}
        </button>
    </div>
);