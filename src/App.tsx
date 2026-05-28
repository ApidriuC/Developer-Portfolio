import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    NavOptions,
    BgAnimation,
    HelloSection,
    StatsSection,
    AboutMeSection,
    ExperienceSection,
    ServicesSection,
    SkillsSection,
    ProjectsSection,
    ConnectMeSection,
    NotificationProvider
} from './components';

export const App = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = t('document-title');
        document.documentElement.lang = i18n.language;
    }, [t, i18n.language]);

    return (
        <>
            <BgAnimation />
            <NotificationProvider>
                <main className="w-full h-full overflow-auto">
                    {/* Portada — terminal */}
                    <NavOptions />
                    <HelloSection />

                    {/* Métricas — build output */}
                    <StatsSection />

                    {/* Sobre mí — README.md */}
                    <AboutMeSection />

                    {/* Trayectoria — git log */}
                    <ExperienceSection />

                    {/* Servicios — function() */}
                    <ServicesSection />

                    {/* Estudios y habilidades — stack.json */}
                    <SkillsSection />

                    {/* Proyectos — repos */}
                    <ProjectsSection />

                    {/* Contacto — terminal */}
                    <ConnectMeSection />
                </main>
            </NotificationProvider>
        </>
    );
};
