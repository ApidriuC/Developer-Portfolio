import MeImage from '../../assets/me-image-profile.jpeg';
import { useTranslation } from 'react-i18next';

function AboutMeSection() {
    const { t } = useTranslation();

    return (
        <section id='about-me' className='flex justify-center items-center h-auto flex-wrap'>
            <div className='border-t border-gray-600 w-full ml-[5%] mr-[5%]' />
            <div className='w-2/4 p-4 mt-10 mb-10 h-full flex justify-center items-center'>
                <img
                    alt="me-image"
                    src={MeImage}
                    className='w-[30rem] h-[30rem] rounded-full object-cover object-left-bottom shadow-2xl'
                />
            </div>
            <div className='w-2/4 pr-40 mt-10 mb-10 h-full flex justify-center items-center content-center flex-wrap'>
                <div className='w-full p-4'>
                    <div className='w-max flex justify-center items-center flex-col'>
                        <p className='leading-[5px]'>{t('about-me-1')}</p>
                        <h2 className='w-max text-5xl p-1'>{t('about-me-2')}</h2>
                        <span className='border border-purple-400 w-32' />
                    </div>
                </div>
                <div className='w-full p-4'>
                    <p className='text-justify text-base'>
                        {t('about-me-desc-1')}
                        <br />
                        <br />
                        {t('about-me-desc-2')}
                        <br />
                        <br />
                        {t('about-me-desc-3')}
                        <br />
                        <br />
                        {t('about-me-desc-4')}
                    </p>
                </div>
            </div>
            <div className='border-t border-gray-600 ml-[5%] mr-[5%] w-full' />
        </section>
    );
}

export default AboutMeSection;