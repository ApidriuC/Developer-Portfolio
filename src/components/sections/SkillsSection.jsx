import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    sqlImage,
    gitImage,
    htmlImage,
    javaImage,
    reactImage,
    visualImage,
    cSharpImage,
    pythonImage,
    oracleImage,
    vsCodeImage,
    nodeJsImage,
    boostrapImage,
    javascriptImage,
    styleSheetImage,
    typeScriptImage,
    tailwindcssImage
} from '../../assets';

const skillsFrontEnd = [
    { label: 'HTML', sourceImage: htmlImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { label: 'CSS', sourceImage: styleSheetImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/CSS' },
    { label: 'Boostrap', sourceImage: boostrapImage, sourceLink: 'https://getbootstrap.com/' },
    { label: 'Tailwind', sourceImage: tailwindcssImage, sourceLink: 'https://tailwindcss.com/' },
    { label: 'React', sourceImage: reactImage, sourceLink: 'https://es.react.dev/' },
    { label: 'JavaScript', sourceImage: javascriptImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    { label: 'TypeScript', sourceImage: typeScriptImage, sourceLink: 'https://www.typescriptlang.org/' },
];

const skillsBackEnd = [
    { label: 'NodeJs', sourceImage: nodeJsImage, sourceLink: 'https://nodejs.org/en' },
    { label: 'C#', sourceImage: cSharpImage, sourceLink: 'https://learn.microsoft.com/es-es/dotnet/csharp/' },
    { label: 'Java', sourceImage: javaImage, sourceLink: 'https://www.java.com/es/' },
    { label: 'Python', sourceImage: pythonImage, sourceLink: 'https://www.python.org/' }
];

const skillsDataBase = [
    { label: 'SQL Server', sourceImage: sqlImage, sourceLink: 'https://www.microsoft.com/es-co/sql-server/sql-server-downloads' },
    { label: 'Oracle', sourceImage: oracleImage, sourceLink: 'https://www.oracle.com/co/' }
];

const skillsFrames = [
    { label: 'Visual Studio Code', sourceImage: vsCodeImage, sourceLink: 'https://code.visualstudio.com/' },
    { label: 'Visual Studio 2022', sourceImage: visualImage, sourceLink: 'https://visualstudio.microsoft.com/es/vs/' },
    { label: 'GIT', sourceImage: gitImage, sourceLink: 'https://git-scm.com/' }
];

const ContainerSkillsOptns = [
    { label: 'Front-End', items: skillsFrontEnd },
    { label: 'Back-End', items: skillsBackEnd },
    { label: 'Data Base', items: skillsDataBase },
    { label: 'Frameworks', items: skillsFrames }
];

export default function SkillsSection() {
    const { t } = useTranslation();

    const educationOptns = [
        { year: '2023', label: t('education-title-1'), value: t('education-place-1'), details: t('education-details-1') },
        { year: '2023', label: t('education-title-2'), value: t('education-place-2'), details: t('education-details-2') },
        { year: '2022', label: t('education-title-3'), value: t('education-place-3'), details: t('education-details-3') },
        { year: '2021', label: t('education-title-4'), value: t('education-place-4'), details: t('education-details-4') }
    ];

    return (
        <section id='skills-me' className='h-auto p-20'>
            <div className='h-full w-full flex justify-center items-start flex-wrap'>
                {/* Titulo */}
                <div className='w-full mb-5'>
                    <h2 className='text-left text-5xl md:text-5xl xs:text-4xl border-b-2 border-purple-400 mb-2 pl-2 pr-2 w-max'>
                        {t('education-skills')}
                    </h2>
                    <p className='text-left pt-2 pb-5 md:text-lg xs:text-sm'>
                        {t('education-skills-desc')}
                    </p>
                </div>

                {/* Education */}
                <div className='w-full md:w-1/3 h-full pr-10 flex justify-center items-center content-center flex-wrap gap-4 xs:pt-[0px] xs:pr-[15px] xs:pl-[15px] md:pr-10 relative z-[1]'>
                    {educationOptns.map((option, index) => (
                        <EducationBox
                            key={index}
                            year={option.year}
                            label={option.label}
                            value={option.value}
                            details={option.details}
                        />
                    ))}
                </div>

                {/* Skills */}
                <div className='w-full md:w-2/3 pl-20 flex justify-center items-center content-center flex-wrap xs:pr-0 xs:pt-5 xs:pl-0 md:pt-0'>
                    {ContainerSkillsOptns.map((option, index) => (
                        <ContainerSkill
                            key={index}
                            label={option.label}
                            items={option.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const EducationBox = ({ label, value, year, details }) => {
    const { t } = useTranslation();
    const [showPopup, setShowPopup] = useState(false);
    const [shouldRenderPopup, setShouldRenderPopup] = useState(false);

    const onMouseEnterHandler = () => {
        setShouldRenderPopup(true);
        setShowPopup(true);
    };

    const onMouseLeaveHandler = () => {
        setShowPopup(false);
        setTimeout(() => setShouldRenderPopup(false), 300);
    };

    return (
        <div
            className='box-education relative z-[1] p-4 rounded-lg border w-full h-[150px] max-w-[500px] xs:max-w-none xs:h-[120px] md:h-[150px] 
                flex justify-center items-center content-center flex-wrap shadow-lg'
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            <div className='label-rectangle absolute top-[10px] left-[-30px] text-white font-bold xs:text-xs'>
                {year}
            </div>
            <p className='text-left w-full text-2xl leading-6 pt-3 xs:text-lg xs:leading-5'>
                {label}
            </p>
            <span className='text-left w-full text-base pt-1 italic xs:text-sm'>
                {value}
            </span>

            {/* Renderizar el Popup si es necesario */}
            {shouldRenderPopup && <Popup isVisible={showPopup} textContent={details} title={t('education-details-title')} />}
        </div>
    );
}

const Popup = ({ isVisible, title, textContent }) => (
    <div
        className={`popup absolute md:top-1/2 md:right-[-575px] transform md:-translate-y-1/2 w-[500px] p-4 shadow-2xl rounded-lg z-[999] transition-opacity duration-300 ease-in-out 
            xs:hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
        <h3 className='font-bold text-white'>{title}</h3>
        <p className='text-sm text-justify'>{textContent}</p>
        <div className='com-circule first-circule absolute shadow-lg' />
        <div className='com-circule second-circule absolute shadow-lg' />
    </div>
);

const ContainerSkill = ({ label, items = [] }) => (
    <div className='skill-container border-l border-gray-500 w-full h-auto pl-5 pr-5 pb-3 mb-5 xs:p-[0] xs:pl-3 md:pl-5'>
        <h3 className='text-left w-full mb-3 text-xl'>{label}</h3>
        <div className='items flex flex-wrap gap-4'>
            {items.map((item, index) => (
                <SkillBox
                    key={index}
                    label={item.label}
                    sourceImage={item.sourceImage}
                    sourceLink={item.sourceLink}
                />
            ))}
        </div>
    </div>
);

const SkillBox = ({ label, sourceImage, sourceLink }) => {
    const goToPage = () => window.open(sourceLink, '_blank');

    return (
        <div className='skill-box w-[180px] rounded-xl border flex justify-center items-center flex-col p-5 gap-2 cursor-pointer shadow-lg relative xs:w-[95px] md:w-[180px]'
            onClick={goToPage}
        >
            <a className='absolute rounded-full border border-gray-500 h-8 w-8 top-1 right-1 transition-all ease-in shadow-lg' />
            <img src={sourceImage} alt="skill" className='w-[55px] h-[55px] rounded-full shadow-lg xs:w-[30px] xs:h-[30px] md:w-[55px] md:h-[55px]' />
            <label className='w-full h-auto font-bold text-base cursor-pointer xs:text-xs md:text-base'>{label}</label>
        </div>
    );
}