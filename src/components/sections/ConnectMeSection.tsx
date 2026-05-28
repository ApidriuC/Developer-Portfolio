import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconName, SocialLink } from 'types/props';
import { socials } from '../../data';
import { Icon, RequestCvButton, SectionFrame, WindowFrame } from '../common';

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

const socialLabel: Record<IconName, string> = {
    github: 'github', linkedin: 'linkedin', mail: 'email'
} as Record<IconName, string>;

export const ConnectMeSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="contact-me" className="w-full px-4 md:px-8 pt-14 pb-16">
            <div className="max-w-3xl mx-auto">
                <WindowFrame
                    accent="green"
                    title={<><span className="accent-file">guest@portfolio</span>: ~ — bash</>}
                    bodyClassName="is-terminal"
                >
                    <div className="term-line"><Prompt /><span className="term-cmd"> cat contact.md</span></div>
                    <h2 className="term-name text-left mt-2" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.6rem)' }}>
                        {t('connect-me-title')}<span className="accent">.</span>
                    </h2>
                    <p className="term-out text-left mt-2 max-w-xl">{t('connect-me-desc')}</p>

                    <div className="term-line mt-6"><Prompt /><span className="term-cmd"> ./request-cv.sh</span></div>
                    <div className="mt-2"><RequestCvButton variant="primary" /></div>

                    <div className="term-line mt-6"><Prompt /><span className="term-cmd"> ls ./social</span></div>
                    <ul className="flex flex-wrap gap-3 mt-2 list-none p-0">
                        {socials.map(link => <SocialItem key={link.id} {...link} />)}
                    </ul>

                    <div className="term-line mt-6"><Prompt /><span className="term-cmd"> echo $COPYRIGHT</span></div>
                    <p className="term-out text-left mt-1">© {new Date().getFullYear()} {t('copyright-text')}</p>

                    <div className="term-line mt-2"><Prompt /><span className="caret" /></div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};

const SocialItem = React.memo(({ alt, href, icon }: SocialLink) => (
    <li>
        <a className="social-link" title={alt} href={href} aria-label={alt} target="_blank" rel="noopener noreferrer">
            <Icon name={icon} size={18} />
            {socialLabel[icon] ?? ''}
        </a>
    </li>
));
