import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import vsCodeImage from '../../assets/vsco-logo.jpg'
import htmlImage from '../../assets/icon-html.jpg'
import cssImage from '../../assets/logo-css.png'
import boostrapImage from '../../assets/logo-boostrap.svg'
import tailwindImage from '../../assets/logo-tailwind.png'
import reactImage from '../../assets/react-logo.png'
import jsImage from '../../assets/logo-javascript.png'
import tsImgage from '../../assets/logo-typescript.png'
import nodeImage from '../../assets/logo-nodejs.png'
import cImage from '../../assets/logo-c.svg'
import javaImage from '../../assets/Java-Logo.png'
import pythonImage from '../../assets/python-logo.png'
import sqlImage from '../../assets/sql-logo.png'
import oracleImage from '../../assets/oracle-logo.svg'
import visualImage from '../../assets/visual-logo.png'
import gitImage from '../../assets/git-logo.png'

function SkillsSection() {
    const { t } = useTranslation();

    const educationOptns = [
        { year: '2023', label: t('education-title-1'), value: t('education-place-1'), details: t('education-details-1') },
        { year: '2023', label: t('education-title-2'), value: t('education-place-2'), details: t('education-details-2') },
        { year: '2022', label: t('education-title-3'), value: t('education-place-3'), details: t('education-details-3') },
        { year: '2021', label: t('education-title-4'), value: t('education-place-4'), details: t('education-details-4') }
    ];

    const skillsFrontEnd = [
        { label: 'HTML', sourceImage: htmlImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/HTML' },
        { label: 'CSS', sourceImage: cssImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        { label: 'Boostrap', sourceImage: boostrapImage, sourceLink: 'https://getbootstrap.com/' },
        { label: 'Tailwind', sourceImage: tailwindImage, sourceLink: 'https://tailwindcss.com/' },
        { label: 'React', sourceImage: reactImage, sourceLink: 'https://es.react.dev/' },
        { label: 'JavaScript', sourceImage: jsImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
        { label: 'TypeScript', sourceImage: tsImgage, sourceLink: 'https://www.typescriptlang.org/' },
    ];

    const skillsBackEnd = [
        { label: 'NodeJs', sourceImage: nodeImage, sourceLink: 'https://nodejs.org/en' },
        { label: 'C#', sourceImage: cImage, sourceLink: 'https://learn.microsoft.com/es-es/dotnet/csharp/' },
        { label: 'Java', sourceImage: javaImage, sourceLink: 'https://www.java.com/es/' },
        { label: 'Python', sourceImage: pythonImage, sourceLink: 'https://www.python.org/' }
    ];

    const skillsBd = [
        { label: 'SQL Server', sourceImage: sqlImage, sourceLink: 'https://www.microsoft.com/es-co/sql-server/sql-server-downloads' },
        { label: 'Oracle', sourceImage: oracleImage, sourceLink: 'https://www.oracle.com/co/' }
    ];

    const skillsFrames = [
        { label: 'Visual Studio Code', sourceImage: vsCodeImage, sourceLink: 'https://code.visualstudio.com/' },
        { label: 'Visual Studio 2022', sourceImage: visualImage, sourceLink: 'https://visualstudio.microsoft.com/es/vs/' },
        { label: 'GIT', sourceImage: gitImage, sourceLink: 'https://git-scm.com/' }
    ];

    const containerSkillsOptns = [
        { label: 'Front-End', items: skillsFrontEnd },
        { label: 'Back-End', items: skillsBackEnd },
        { label: 'Data Base', items: skillsBd },
        { label: 'Frameworks', items: skillsFrames },
    ];

    return (
        <section id='skills-me' className='h-auto p-20'>
            <div className='h-full w-full flex justify-center items-start flex-wrap'>
                {/* Titulo */}
                <div className='w-full mb-5'>
                    <h2 className='text-left text-5xl'>
                        {t('education-skills')}
                    </h2>
                    <p className='text-left pt-2 pb-5'>
                        {t('education-skills-desc')}
                    </p>
                </div>

                {/* Education */}
                <div className='w-full md:w-1/3 h-full pr-10 flex justify-center items-center content-center flex-wrap gap-4'>
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
                <div className='w-full md:w-2/3 pl-20 flex justify-center items-center content-center flex-wrap'>
                    {containerSkillsOptns.map((option, index) => (
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

function EducationBox({ label, value, year, details }) {
    const { t } = useTranslation();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div
            className='box-education relative  p-4 rounded-lg border w-full h-[150px] max-w-[500px] flex justify-center items-center content-center flex-wrap shadow-lg'
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            <div className='label-rectangle absolute top-[10px] left-[-30px] text-white font-bold'>
                {year}
            </div>
            <p className='text-left w-full text-2xl leading-6 pt-3'>
                {label}
            </p>
            <span className='text-left w-full text-base pt-1 italic'>
                {value}
            </span>

            {/* Popup emergente */}
            <div
                className={`popup absolute top-1/2 right-[-575px] transform -translate-y-1/2 w-[500px] p-4 shadow-2xl rounded-lg z-10 transition-opacity duration-300 ease-in-out
                    ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <h3 className='font-bold text-white'>{t('education-details-title')}</h3>
                <p className='text-sm text-justify'>
                    {details}
                </p>
                <div className='com-circule first-circule absolute shadow-lg' />
                <div className='com-circule second-circule absolute shadow-lg' />
            </div>
        </div>
    );
}

function ContainerSkill({ label, items = [] }) {
    return (
        <div className='skill-container border-l border-gray-500 w-full h-auto pl-5 pr-5 pb-3 mb-5'>
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
}

function SkillBox({ label, sourceImage, sourceLink }) {
    const goToPage = () => window.open(sourceLink, '_blank');

    return (
        <div className='skill-box w-[180px] rounded-xl border flex justify-center items-center flex-col p-5 gap-2 cursor-pointer shadow-lg relative'
            onClick={goToPage}
        >
            <a className='absolute rounded-full border border-gray-500 h-8 w-8 top-1 right-1 transition-all ease-in shadow-lg' />
            <img src={sourceImage} alt="skill" className='w-[55px] h-[55px] rounded-full shadow-lg' />
            <label className='w-full h-auto font-bold text-base cursor-pointer'>{label}</label>
        </div>
    );
}

export default SkillsSection;