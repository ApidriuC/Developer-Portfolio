import React, { CSSProperties, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSkillProps, EducationItem, EducationKind, IconName, SkillBoxProps } from 'types/props';
import { containersSkills, educationItems } from '../../data';
import { Form, Icon, SectionFrame, WindowFrame } from '../common';

const kindIcon: Record<EducationKind, IconName> = {
    degree: 'graduation',
    postgrade: 'shield',
    certification: 'award',
    event: 'sparkles'
};

const kindColor: Record<EducationKind, string> = {
    degree: 'blue',
    postgrade: 'purple',
    certification: 'green',
    event: 'yellow'
};

const fileNames: Record<string, string> = {
    'edu-secesp-title': 'especializacion-seguridad.md',
    'edu-aws-title': 'aws-cloud-practitioner.cert',
    'edu-eng-title': 'ingenieria-sistemas.cert',
    'edu-mintic-title': 'mision-tic-2022.cert',
    'edu-veracode-title': 'veracode.cert',
    'edu-congress-title': 'congreso-ingenieria.log'
};

const Row = ({ children }: { children?: ReactNode }) => (
    <div className="code-row"><span className="ln" /><div className="text-left">{children}</div></div>
);

export const SkillsSection = () => {
    return (
        <SectionFrame id="skills-me" className="w-full px-4 md:px-8 py-14">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                {/* Educación — protagonista, full width, tarjetas */}
                <WindowFrame accent="green" title="EXPLORER — ~/education">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {educationItems.map((item, index) => <EducationCard key={index} {...item} />)}
                    </div>
                </WindowFrame>

                {/* Skills — stack.json */}
                <WindowFrame accent="blue" tab="stack.json">
                    <div className="code-view overflow-x-auto">
                        <Row>
                            <span className="tok-key">const</span>{' '}
                            <span className="c-blue">stack</span>{' '}
                            <span className="tok-punc">=</span>{' '}
                            <span className="tok-bracket">{'{'}</span>
                        </Row>
                        {containersSkills.map((container, index) => (
                            <CategoryBlock key={index} {...container} />
                        ))}
                        <Row><span className="tok-bracket">{'}'}</span></Row>
                    </div>
                </WindowFrame>
            </div>
        </SectionFrame>
    );
};

const CategoryBlock = React.memo(({ label, skills }: ContainerSkillProps) => (
    <>
        <Row>
            <span className="tok-key">&quot;{label.toLowerCase()}&quot;</span>
            <span className="tok-punc">: [</span>
        </Row>
        <Row>
            <div className="flex flex-wrap pl-4">
                {skills.map((skill, index) => <SkillChip key={index} {...skill} />)}
            </div>
        </Row>
        <Row><span className="tok-punc">],</span></Row>
    </>
));

const SkillChip = React.memo(({ label, sourceImage, sourceLink }: SkillBoxProps) => (
    <button type="button" className="skill-chip" onClick={() => window.open(sourceLink, '_blank', 'noopener')} title={label}>
        <img src={sourceImage} alt={label} />
        <span>{label}</span>
    </button>
));

const EducationCard = ({ year, kind, status, titleKey, placeKey, detailsKey, support }: EducationItem) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const style = { ['--accent']: `var(--${kindColor[kind]})` } as CSSProperties;

    return (
        <>
            <button type="button" className="edu-card" style={style} onClick={() => setIsOpen(true)}>
                <span className="edu-card-icon"><Icon name={kindIcon[kind]} size={22} /></span>
                <span className="edu-card-body">
                    <span className="edu-card-file">{fileNames[titleKey] ?? 'file'}</span>
                    <span className="edu-card-title">{t(titleKey)}</span>
                    <span className="edu-card-place">{t(placeKey)}</span>
                    <span className="edu-card-meta">
                        <span className="edu-card-year">{year}</span>
                        {status === 'in-progress' && <span className="badge-progress">{t('edu-in-progress')}</span>}
                    </span>
                </span>
            </button>

            {isOpen && (
                <Form className="form_education" onClose={() => setIsOpen(false)}>
                    <div className="text_side text-center w-full grid place-items-center md:p-4 xs:p-0">
                        <h2 className="md:text-3xl xs:text-xl">{t(titleKey)}</h2>
                        <h6 className="italic md:text-lg xs:text-sm text-muted">{t(placeKey)}</h6>
                    </div>
                    <p className="text-justify md:text-base xs:text-xs xs:p-2 text-muted">{t(detailsKey)}</p>
                    {support ? (
                        <div className="flex justify-center items-center pt-4">
                            <img alt={t(titleKey)} src={support} className="image_experience md:h-[45vh] xs:h-auto" />
                        </div>
                    ) : (
                        <p className="text-center italic text-muted pt-4">{t('edu-no-support')}</p>
                    )}
                </Form>
            )}
        </>
    );
};
