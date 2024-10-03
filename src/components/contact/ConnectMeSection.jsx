import { useTranslation } from 'react-i18next';
import gitHubIcon from '../../assets/github-icon.svg';
import linkedIcon from '../../assets/linkedln-icon.svg';
import messageMeIcon from '../../assets/message-me-icon.svg';

function ConnectMeSection() {
    const { t } = useTranslation();

    return (
        <section id='contact-me' className='w-full h-[100vh] rounded-t-3xl'>
            <div className='h-full w-full p-40 flex justify-center content-center items-center flex-wrap gap-5 xs:p-5'>
                <h2 className='w-full text-7xl font-bold md:text-5xl xs:text-4xl'>
                    {t('connect-me-title')}
                </h2>
                <ul className="w-auto footer-links flex justify-center align-center list-none items-center text-center text-3xl gap-4 p-5 rounded-lg">
                    <li className="transform scale-90 hover:scale-100 duration-200">
                        <a href="https://github.com/ApidriuC" target="_blank" rel="noopener noreferrer" title="Go to Andrés GitHub" tabIndex="0">
                            <img className='h-12' alt='source-image' src={gitHubIcon} />
                        </a>
                    </li>

                    <li className="transform scale-90 hover:scale-100 duration-200">
                        <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-londo%C3%B1o-campos-b03741222/" target="_blank" rel="noopener noreferrer" title="Connect with Juan Cruz on LinkedIn" tabIndex="0">
                            <img className='h-12' alt='source-image' src={linkedIcon} />
                        </a>
                    </li>

                    <li className="transform scale-90 hover:scale-100 duration-200">
                        <a href="mailto:andresfloncam@gmail.com" target="_blank" rel="noopener noreferrer" title="Send Andrés Felipe Londoño an email" tabIndex="0">
                            <img className='h-14' alt='source-image' src={messageMeIcon} />
                        </a>
                    </li>
                </ul>
                <p className='w-full'>
                    &copy; {t('copyright-text')}
                </p>
            </div>
        </section>
    );
}

export default ConnectMeSection;