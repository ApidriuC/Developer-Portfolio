import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '../../data';
import { Icon, SectionFrame, WindowFrame } from '../common';

const fnNames: Record<string, string> = {
    'svc-web-title': 'buildWebApps',
    'svc-api-title': 'integrateApis',
    'svc-db-title': 'manageData',
    'svc-cloud-title': 'deployToCloud',
    'svc-ai-title': 'integrateAI',
    'svc-micro-title': 'buildMicroservices'
};

const accents = ['cyan', 'blue', 'purple', 'green', 'orange', 'pink'] as const;

export const ServicesSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="services-me" className="w-full px-4 md:px-8 py-14">
            <div className="max-w-5xl mx-auto">
                <WindowFrame accent="cyan" tab="services.ts">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, index) => {
                            const style = { ['--accent']: `var(--${accents[index % accents.length]})` } as CSSProperties;
                            return (
                                <article key={index} className="fn-card" style={style}>
                                    <span className="fn-icon"><Icon name={service.icon} size={24} /></span>
                                    <div className="fn-sig">
                                        <span className="kw">function</span>{' '}
                                        <span className="fn">{fnNames[service.titleKey] ?? 'run'}</span>
                                        <span className="br">()</span>
                                    </div>
                                    <p className="text-muted text-left leading-relaxed" style={{ fontSize: 'var(--size-text-small)' }}>
                                        {t(service.descKey)}
                                    </p>
                                    <p className="fn-comment text-left">{`// ${t(service.titleKey)}`}</p>
                                </article>
                            );
                        })}
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};
