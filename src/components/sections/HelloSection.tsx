import { SectionFrame } from '../common';
import { useTranslation } from 'react-i18next';

export const HelloSection = () => {
    const { t } = useTranslation();

    return (
        <SectionFrame id='intro' className='w-full'>
            <div className="container-intro">
                <p>{t('intro-hello')}</p>
                <h1>
                    Andrés Felipe
                    <br />
                    Londoño Campos
                </h1>
                <p>
                    {t('intro-developer')}
                </p>
                <p className="description-intro">
                    “{t('intro-message')}”
                    <br />
                    - Martin Goldin.
                </p>
            </div>
        </SectionFrame>
    );
}