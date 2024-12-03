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
            <BgAnimation />
            <NotificationProvider>
                <main className='w-full h-full overflow-auto'>
                    {/* Portada */}
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

                    {/* Conecta conmigo */}
                    <ConnectMeSection />
                </main>
            </NotificationProvider>
        </>
    );
}