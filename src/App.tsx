import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Border,
    NavOptions,
    BgAnimation,
    HelloSection,
    SkillsSection,
    AboutMeSection,
    ProjectsSection,
    ConnectMeSection,
    NotificationProvider
} from './components';

export const App = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = t('document-title');
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <>
            <NotificationProvider>
                <main className='w-full h-full'>
                    {/* Portada */}
                    <BgAnimation />
                    <NavOptions />
                    <HelloSection />
                    <Border />

                    {/* Sobre mí */}
                    <AboutMeSection />
                    <Border />

                    {/* Conocimientos */}
                    <SkillsSection />
                    <Border />

                    {/* Proyectos */}
                    <ProjectsSection />
                </main>
                <footer className='w-full'>
                    <ConnectMeSection />
                </footer>
            </NotificationProvider>
        </>
    );
}