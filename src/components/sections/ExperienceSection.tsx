import { useTranslation } from 'react-i18next';
import { experienceItems } from '../../data';
import { SectionFrame, WindowFrame } from '../common';

/** Hash corto determinista (estilo git) a partir de un string. */
const shortHash = (s: string) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h.toString(16).padStart(7, '0').slice(0, 7);
};

export const ExperienceSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="experience-me" className="w-full px-4 md:px-8 py-14">
            <div className="max-w-3xl mx-auto">
                <WindowFrame accent="purple" title={<>git log <span className="accent-file">--graph --oneline</span></>}>
                    <div className="gitlog">
                        {experienceItems.map((item, index) => (
                            <div key={index} className={`commit ${item.current ? 'is-head' : ''}`}>
                                <span className="commit-node" />
                                <div className="text-left">
                                    <div className="flex flex-wrap items-center gap-2" style={{ fontSize: '0.8rem' }}>
                                        <span className="commit-hash">commit {shortHash(item.company + item.period)}</span>
                                        {item.current && (
                                            <span className="commit-ref">(<span className="head">HEAD -&gt; main</span>)</span>
                                        )}
                                    </div>
                                    <div className="commit-meta mt-1">
                                        {item.period}{item.current ? ` — ${t('experience-present')}` : ''} · {item.company}
                                    </div>
                                    <div className="commit-msg">{t(item.roleKey)}</div>
                                    {item.descKey && <div className="commit-desc">{t(item.descKey)}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};
