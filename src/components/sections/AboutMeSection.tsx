import { useTranslation } from 'react-i18next';
import { Icon, SectionFrame, WindowFrame } from '../common';
import { IconName } from 'types/props';

const facts: { icon: IconName; keyLabel: string; valueKey: string }[] = [
    { icon: 'globe', keyLabel: 'location', valueKey: 'about-fact-location' },
    { icon: 'briefcase', keyLabel: 'role', valueKey: 'about-fact-role' },
    { icon: 'shield', keyLabel: 'studying', valueKey: 'about-fact-study' },
    { icon: 'sparkles', keyLabel: 'languages', valueKey: 'about-fact-langs' }
];

export const AboutMeSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="about-me" className="w-full px-4 md:px-8 py-14">
            <div className="max-w-4xl mx-auto">
                <WindowFrame accent="blue" tab="README.md">
                    <div className="md">
                        <h1><span className="text-muted mono">#</span> Andrés Felipe Londoño Campos</h1>
                        <blockquote><p>{t('intro-tagline')}</p></blockquote>

                        <p>{t('about-me-desc-1')}</p>
                        <p>{t('about-me-desc-2')}</p>
                        <p>{t('about-me-desc-3')}</p>
                        <p>{t('about-me-desc-4')}</p>

                        <h2>## {t('about-facts-heading')}</h2>
                        <ul className="md-list">
                            {facts.map(fact => (
                                <li key={fact.keyLabel} className="flex items-center gap-2">
                                    <Icon name={fact.icon} size={15} className="accent" />
                                    <span className="li-key">{fact.keyLabel}</span>
                                    <span className="text-muted">:</span>
                                    <span className="li-val">{t(fact.valueKey)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};
