import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { stats } from '../../data';
import { Icon, SectionFrame, WindowFrame } from '../common';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 1.4,
            ease: 'easeOut',
            onUpdate: latest => setValue(Math.floor(latest))
        });
        return () => controls.stop();
    }, [inView, to]);

    return <span ref={ref} className="stat-value">{value}{suffix}</span>;
};

export const StatsSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="stats-me" className="w-full px-4 md:px-8 py-10">
            <div className="max-w-5xl mx-auto">
                <WindowFrame accent="yellow" title="TERMINAL — npm run build" bodyClassName="is-terminal">
                    <p className="build-ok">✓ {t('stats-build-ok')}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-cell">
                                <span className="flex items-center gap-2 text-muted mono" style={{ fontSize: '0.75rem' }}>
                                    <Icon name={stat.icon} size={15} />
                                </span>
                                <div className="mt-1"><CountUp to={stat.value} suffix={stat.suffix} /></div>
                                <div className="stat-label">{t(stat.labelKey)}</div>
                            </div>
                        ))}
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};
