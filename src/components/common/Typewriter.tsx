import { useEffect, useState } from 'react';

interface TypewriterProps {
    text: string;
    /** ms por carácter */
    speed?: number;
    /** retardo inicial antes de empezar a escribir (ms) */
    startDelay?: number;
    onComplete?: () => void;
    className?: string;
    /** mostrar cursor parpadeante mientras escribe */
    caret?: boolean;
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Escribe `text` carácter por carácter; respeta prefers-reduced-motion (instantáneo). */
export const Typewriter = ({ text, speed = 45, startDelay = 0, onComplete, className = '', caret = true }: TypewriterProps) => {
    const [shown, setShown] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setShown(text);
            setDone(true);
            onComplete?.();
            return;
        }

        let index = 0;
        let timer: number;

        const tick = () => {
            index += 1;
            setShown(text.slice(0, index));
            if (index < text.length) {
                timer = window.setTimeout(tick, speed);
            } else {
                setDone(true);
                onComplete?.();
            }
        };

        const starter = window.setTimeout(tick, startDelay);
        return () => {
            window.clearTimeout(starter);
            window.clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    return (
        <span className={className}>
            {shown}
            {caret && !done && <span className="caret" />}
        </span>
    );
};
