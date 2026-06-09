import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from 'types/props';
import { projects, GITHUB_URL } from '../../data';
import { Icon, SectionFrame, WindowFrame } from '../common';

const langColor: Record<string, string> = {
    'C#': '#178600',
    '.NET Framework': '#512bd4',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Bootstrap: '#7952b3',
    'Node.js': '#3c873a',
    React: '#61dafb',
    'Tailwind CSS': '#06b6d4',
    Python: '#3572A5',
    Java: '#b07219'
};

const slugify = (value: string) =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export const ProjectsSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="projects-me" className="w-full px-4 md:px-8 py-14">
            <div className="max-w-6xl mx-auto">
                <WindowFrame accent="orange" title="EXPLORER — ~/projects">
                    {/* Nota: públicos vs. contribuciones privadas */}
                    <div className="flex items-start gap-3 p-3 mb-5 rounded-lg" style={{ background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
                        <span className="accent mt-0.5 flex-shrink-0"><Icon name="lock" size={18} /></span>
                        <p className="text-muted text-left mono" style={{ fontSize: '0.78rem', lineHeight: 1.6 }}>
                            <span className="c-green">{'// '}</span>{t('projects-private-note')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {projects.map((project, index) => <RepoCard key={index} {...project} />)}
                    </div>

                    <div className="flex justify-center mt-8">
                        <a className="btn-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                            <Icon name="github" size={18} />
                            {t('projects-view-more')}
                            <Icon name="arrow-up-right" size={15} />
                        </a>
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};

const RepoCard = React.memo(({ title, titleKey, descKey, link, image, visibility, tags }: Project) => {
    const { t } = useTranslation();
    const name = titleKey ? t(titleKey) : title;
    const isPublic = visibility === 'public';

    const cta = isPublic
        ? { label: t('project-view-code'), arrow: true }
        : link
            ? { label: t('project-view-site'), arrow: true }
            : { label: t('project-confidential'), arrow: false };

    return (
        <article className="repo-card">
            <div className="flex items-start justify-between gap-2">
                <span className="repo-name"><span className="ns">andres/</span>{slugify(name)}</span>
                <span className={`badge-visibility ${isPublic ? 'is-public' : 'is-private'}`}>
                    <Icon name={isPublic ? 'lock-open' : 'lock'} size={11} />
                    {t(isPublic ? 'project-public' : 'project-private')}
                </span>
            </div>

            {descKey && (
                <p className="text-muted text-left mt-1" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>{t(descKey)}</p>
            )}

            <div className="repo-thumb">
                <img src={image} alt={name} loading="lazy" decoding="async" />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
                {tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="repo-lang">
                        <span className="lang-dot" style={{ background: langColor[tag.alt] ?? 'var(--text-muted)' }} />
                        {tag.alt}
                    </span>
                ))}
            </div>

            {link ? (
                <a className="repo-link" href={link} target="_blank" rel="noreferrer">
                    {cta.arrow && <Icon name="arrow-up-right" size={14} />}{cta.label}
                </a>
            ) : (
                <span className="repo-link text-muted" style={{ color: 'var(--text-muted)' }}>
                    <Icon name="lock" size={13} />{cta.label}
                </span>
            )}
        </article>
    );
});
