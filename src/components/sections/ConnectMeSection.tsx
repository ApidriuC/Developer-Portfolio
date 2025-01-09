import React from 'react';
import { SectionFrame } from '../common';
import { useTranslation } from 'react-i18next';
import { ImageReferenceProps } from 'types/props';
import { gitHubImage, linkedImage, messageMeImage } from '../../assets';

const links: ImageReferenceProps[] = [
    {
        id: 0,
        icon: gitHubImage,
        alt: "Go to Andrés GitHub",
        href: "https://github.com/ApidriuC"
    },
    {
        id: 1,
        icon: linkedImage,
        alt: "Connect with Andrés on LinkedIn",
        href: "https://www.linkedin.com/in/andr%C3%A9s-felipe-londo%C3%B1o-campos-b03741222/"
    },
    {
        id: 2,
        icon: messageMeImage,
        alt: "Send Andrés an email",
        href: "mailto:andresfloncam@gmail.com"
    }
];

export const ConnectMeSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id="contact-me" className='w-full h-[100vh] rounded-t-3xl'>
            <div className="h-full w-full p-40 flex justify-center content-center items-center flex-wrap gap-5 xs:p-5">
                <h2 className="w-full text-7xl font-bold md:text-5xl xs:text-4xl">
                    {t('connect-me-title')}
                </h2>
                <ul className="w-auto footer-links flex justify-center align-center list-none items-center text-center text-3xl gap-4 p-5 rounded-lg">
                    {links.map((link, index) => <ImageReference key={index} {...link} />)}
                </ul>
                <p className="w-full">
                    &copy; {t('copyright-text')}
                </p>
            </div>
        </SectionFrame>
    );
}

const ImageReference = React.memo(({ id, alt, href, icon }: ImageReferenceProps) => {
    return (
        <li key={id} className="transform scale-90 hover:scale-100 duration-200">
            <a
                title={alt}
                href={href}
                tabIndex={0}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="h-12" alt={alt} src={icon} />
            </a>
        </li>
    );
});