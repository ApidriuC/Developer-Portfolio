import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MeImage } from '../../assets';
import { Icon, RequestCvButton, SectionFrame, Typewriter, WindowFrame } from '../common';

const Prompt = () => (
    <span className="term-prompt">
        <span className="user">guest</span>
        <span className="at">@</span>
        <span className="host">portfolio</span>
        <span className="sign">:</span>
        <span className="path">~</span>
        <span className="sign">$</span>
    </span>
);

const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'smooth' });

export const HelloSection = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(0);

    return (
        <SectionFrame id="intro" className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-14 pb-24">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-stretch justify-center">
                {/* Terminal */}
                <WindowFrame
                    accent="green"
                    title={<><span className="accent-file">guest@portfolio</span>: ~ — zsh</>}
                    bodyClassName="is-terminal"
                    className="flex-1 w-full"
                >
                    <div className="term-line">
                        <Prompt />
                        <Typewriter text=" ./whoami --full" speed={55} onComplete={() => setStep(1)} />
                    </div>

                    {step >= 1 && (
                        <div className="animate-fadeUp mt-3">
                            <p className="term-out text-left pl-2">{t('intro-hello')}</p>
                            <h1 className="term-name text-left">
                                Andrés Felipe <span className="accent">Londoño Campos</span>
                            </h1>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="role-chip"><Icon name="code" size={15} />{t('intro-developer')}</span>
                                <span className="role-chip"><Icon name="shield" size={15} />{t('intro-security')}</span>
                            </div>

                            <p className="term-out text-left mt-5 max-w-full pr-5" style={{ fontSize: 'var(--size-text-small)' }}>
                                <span className="c-purple">const</span> <span className="c-blue">tagline</span> ={' '}
                                <span className="c-green">&quot;{t('intro-tagline')}&quot;</span>;
                            </p>

                            <div className="term-line mt-6"><Prompt /><span className="term-cmd"> ./contact.sh</span></div>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <RequestCvButton variant="primary" />
                                <button type="button" className="btn-ghost" onClick={() => scrollTo('projects-me')}>
                                    <Icon name="folder" size={16} />{t('intro-cta-projects')}
                                </button>
                            </div>

                            <div className="term-line mt-6"><Prompt /><span className="caret" /></div>
                        </div>
                    )}
                </WindowFrame>

                {/* Foto como ventana de imagen */}
                <WindowFrame accent="cyan" tab="profile.webp" className="w-full md:w-[300px] flex-shrink-0">
                    <div className="flex items-center justify-center">
                        <img
                            src={MeImage}
                            alt="Andrés Felipe Londoño Campos"
                            className="w-full max-w-[260px] aspect-[3/4] object-cover object-top rounded-lg"
                            style={{ border: '1px solid var(--border)' }}
                        />
                    </div>
                    <p className="mono text-muted text-center mt-3" style={{ fontSize: '0.72rem' }}>
                        ~/assets/profile.webp
                    </p>
                    <p className="term-out text-center italic mt-4" style={{ fontSize: '0.78rem' }}>
                        <span className="c-green">{'//'}</span> &quot;{t('intro-message')}&quot;
                        <span className="block text-muted not-italic mt-1">— Martin Golding</span>
                    </p>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};
