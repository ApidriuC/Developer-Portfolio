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

export default function App() {
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
                    <Border />

                    <AboutMeSection />
                    <Border />

                    <SkillsSection />
                    <Border />

                    <ProjectsSection />
                </main>
                <footer className='w-full'>
                    <ConnectMeSection />
                </footer>
            </NotificationProvider>
        </>
    );
}