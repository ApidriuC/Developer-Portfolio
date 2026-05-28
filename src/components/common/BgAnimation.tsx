import './BgAnimation.css';

export const BgAnimation = () => (
    <div className="bg-animation" aria-hidden="true">
        <div className="bg-dots" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <span className="glyph g1">{'{ }'}</span>
        <span className="glyph g2">{'</>'}</span>
        <span className="glyph g3">{'$_'}</span>
        <span className="glyph g4">{';'}</span>
    </div>
);
