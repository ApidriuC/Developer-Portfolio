import { useTranslation } from 'react-i18next';
import { gitHubImage, linkedImage, messageMeImage } from '../../assets';

const links = [
    {
        title: "GitHub",
        icon: gitHubImage,
        alt: "Go to Andrés GitHub",
        href: "https://github.com/ApidriuC"
    },
    {
        title: "LinkedIn",
        icon: linkedImage,
        alt: "Connect with Andrés on LinkedIn",
        href: "https://www.linkedin.com/in/andr%C3%A9s-felipe-londo%C3%B1o-campos-b03741222/"
    },
    {
        title: "Email",
        icon: messageMeImage,
        alt: "Send Andrés an email",
        href: "mailto:andresfloncam@gmail.com"
    }
];

export default function ConnectMeSection() {
    const { t } = useTranslation();

    return (
        <section id="contact-me" className="w-full h-[100vh] rounded-t-3xl">
            <div className="h-full w-full p-40 flex justify-center content-center items-center flex-wrap gap-5 xs:p-5">
                <h2 className="w-full text-7xl font-bold md:text-5xl xs:text-4xl">
                    {t('connect-me-title')}
                </h2>
                <ul className="w-auto footer-links flex justify-center align-center list-none items-center text-center text-3xl gap-4 p-5 rounded-lg">
                    {links.map((link, index) => (
                        <li key={index} className="transform scale-90 hover:scale-100 duration-200">
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.alt}
                                tabIndex="0"
                            >
                                <img className="h-12" alt={link.alt} src={link.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="w-full">
                    &copy; {t('copyright-text')}
                </p>
            </div>
        </section>
    );
}