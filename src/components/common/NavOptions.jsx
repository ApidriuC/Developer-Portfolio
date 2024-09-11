import '../../styles/components/NavOptions.css';
import { useTranslation } from 'react-i18next';
import { useNotification } from './NotificationComponent.jsx';

function NavOptions() {
    const { t, i18n } = useTranslation();
    const { showNotification } = useNotification();

    const changeLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        showNotification(t('notification-lng-change'));
    };

    const changeTheme = () => {
        const classNameDark = 'dark-theme';
        document.body.classList.toggle(classNameDark);
        showNotification(t('notification-theme-change'));
    }

    const goToScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }

    const options = [
        { className: 'icon-character', label: t('option-home-label'), action: () => goToScroll('intro') },
        { className: 'icon-person', label: t('option-about-me-label'), action: () => goToScroll('about-me') },
        { className: 'icon-code', label: t('option-skills-label'), action: () => goToScroll('skills-me') },
        { className: 'icon-book', label: t('option-projects-label'), action: () => goToScroll('projects-me') },
        { className: 'icon-message', label: t('option-contact-label'), action: () => goToScroll('contact-me') },
        { className: 'theme-icon', label: t('option-theme-label'), action: changeTheme },
        { label: t('option-language-label'), value: t('option-language-value'), action: changeLanguage },
    ];

    return (
        <>
            <div className='navBar-bg' />
            <div className='navBar-float'>
                {options.map((option, index) => (
                    <OptionControl
                        key={index}
                        Label={option.label}
                        Value={option.value}
                        Action={option.action}
                        ClassName={option.className}
                    />
                ))}
            </div>
        </>
    );
}

function OptionControl({ Value, Label, Action, ClassName }) {
    return (
        <div className='option-navBar'>
            <label className='option'>{Label}</label>
            <button className={`${ClassName}`} onClick={Action}>{Value}</button>
        </div>
    );
}

export default NavOptions;