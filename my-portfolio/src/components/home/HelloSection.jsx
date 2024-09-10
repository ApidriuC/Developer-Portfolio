import { useTranslation } from 'react-i18next';

function HelloSection() {
    const { t } = useTranslation();

    return (
        <section id="intro">
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
        </section>
    );
}

export default HelloSection;