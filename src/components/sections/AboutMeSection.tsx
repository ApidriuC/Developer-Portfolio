import { MeImage } from '../../assets';
import { SectionFrame } from '../common';
import { useTranslation } from 'react-i18next';

export const AboutMeSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id='about-me' className='flex flex-wrap justify-center items-center h-auto p-10 pl-40 pr-40'>
            {/* Imagen */}
            <div className='w-full md:w-2/4 p-4 flex justify-center'>
                <img
                    alt="me-image"
                    src={MeImage}
                    className='image-me w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] rounded-full object-cover xs:w-[15rem] xs:h-[15rem]'
                />
            </div>

            {/* Texto */}
            <div className='w-full md:w-2/4 p-4 flex flex-col justify-center items-start'>
                <h2 className='md:text-5xl xs:text-4xl border-b-2 border-purple-400 mb-5 pl-3 pr-3'>
                    {t('about-me-2')}
                </h2>
                <div className='text-justify'>
                    <p className='text-base text-justify md:text-sm xs:text-xs'>
                        {/* Parrafos */}
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
        </SectionFrame>
    );
}