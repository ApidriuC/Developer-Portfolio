import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import './BackToTop.css';

/** Botón flotante que aparece al bajar y devuelve el scroll al inicio. */
export const BackToTop = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scroller = document.querySelector('main');
        if (!scroller) return;

        const onScroll = () => setVisible(scroller.scrollTop > 600);
        scroller.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => scroller.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            className={`back-to-top${visible ? ' is-visible' : ''}`}
            onClick={scrollToTop}
            aria-label={t('back-to-top')}
            title={t('back-to-top')}
        >
            <Icon name="chevron-up" size={20} />
        </button>
    );
};
