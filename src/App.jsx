import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BgAnimation from './utils/BgAnimation.jsx';
import NavOptions from './components/common/NavOptions.jsx';
import HelloSection from './components/home/HelloSection.jsx';
import SkillsSection from './components/skills/SkillsSection.jsx';
import AboutMeSection from './components/resume/AboutMeSection.jsx';
import ProjectsSection from './components/projects/ProjectsSection.jsx';
import ConnectMeSection from './components/contact/ConnectMeSection.jsx';
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
                <main className='w-full h-full'>
                    <BgAnimation />
                    <NavOptions />
                    <HelloSection />
                    <div className='border-t border-gray-600 w-[90%] ml-[5%] mr-[5%]' />
                    <AboutMeSection />
                    <div className='border-t border-gray-600 w-[90%] ml-[5%] mr-[5%]' />
                    <SkillsSection />
                    <div className='border-t border-gray-600 w-[90%] ml-[5%] mr-[5%]' />
                    <ProjectsSection />
                </main>
                <footer className='w-full'>
                    <ConnectMeSection />
                </footer>
            </NotificationProvider>
        </>
    );
}

export default App;