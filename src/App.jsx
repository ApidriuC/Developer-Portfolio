import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BgAnimation from './utils/BgAnimation.jsx';
import NavOptions from './components/common/NavOptions.jsx';
import HelloSection from './components/home/HelloSection.jsx';
import SkillsSection from './components/skills/SkillsSection.jsx';
import AboutMeSection from './components/resume/AboutMeSection.jsx';
import { NotificationProvider } from './components/common/NotificationComponent.jsx';

function App() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = t('document-title');
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <>
            <NotificationProvider>
                <BgAnimation />
                <NavOptions />
                <HelloSection />
                <AboutMeSection />
                <SkillsSection />
            </NotificationProvider>
        </>
    );
}

export default App;