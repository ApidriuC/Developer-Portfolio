import { CSSProperties, ReactNode } from 'react';

type AccentColor = 'green' | 'cyan' | 'blue' | 'purple' | 'yellow' | 'orange' | 'red' | 'pink';

interface WindowFrameProps {
    /** Texto/filename mostrado en la barra de título (acepta JSX). */
    title?: ReactNode;
    /** Si se pasa, muestra una "pestaña" de editor en vez del título simple. */
    tab?: string;
    /** Color de acento de la ventana (sobrescribe --accent localmente). */
    accent?: AccentColor;
    className?: string;
    bodyClassName?: string;
    children: ReactNode;
}

/** Chrome de ventana estilo editor/terminal: barra con semáforo + título o pestaña. */
export const WindowFrame = ({ title, tab, accent, className = '', bodyClassName = '', children }: WindowFrameProps) => {
    const style = accent ? ({ ['--accent']: `var(--${accent})` } as CSSProperties) : undefined;

    return (
        <div className={`window ${className}`} style={style}>
            <div className="window-bar">
                <span className="window-dots">
                    <i className="dot-r" />
                    <i className="dot-y" />
                    <i className="dot-g" />
                </span>
                {tab
                    ? <span className="window-tab"><span className="tab-dot" />{tab}</span>
                    : title && <span className="window-title">{title}</span>}
            </div>
            <div className={`window-body ${bodyClassName}`}>
                {children}
            </div>
        </div>
    );
};
