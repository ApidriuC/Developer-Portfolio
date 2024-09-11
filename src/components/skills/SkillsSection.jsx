import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import vsCodeImage from '../../assets/vsco-logo.jpg'

function SkillsSection() {
    const { t } = useTranslation();

    const educationOptns = [
        { year: '2023', label: t('education-title-1'), value: t('education-place-1'), details: t('education-details-1') },
        { year: '2023', label: t('education-title-2'), value: t('education-place-2'), details: t('education-details-2') },
        { year: '2022', label: t('education-title-3'), value: t('education-place-3'), details: t('education-details-3') },
        { year: '2021', label: t('education-title-4'), value: t('education-place-4'), details: t('education-details-4') }
    ];

    const skillsFrontEnd = [
        { label: 'Visual studio code', sourceImage: vsCodeImage }
    ];

    const skillsBackEnd = [
        { label: 'Visual studio code', sourceImage: vsCodeImage }
    ];

    const skillsBd = [
        { label: 'Visual studio code', sourceImage: vsCodeImage }
    ];

    const containerSkillsOptns = [
        { label: 'Front-End', items: skillsFrontEnd },
        { label: 'Back-End', items: skillsBackEnd },
        { label: 'Base de datos', items: skillsBd },
    ];

    return (
        <section id='skills-me' className='h-[100vh] pt-24 pb-24 pl-40 pr-40'>
            <div className='h-full w-full flex justify-center items-center flex-wrap'>
                {/* Titulo */}
                <div className='w-full'>
                    <h2 className='text-left text-5xl'>
                        {t('education-skills')}
                    </h2>
                </div>
                {/* Education */}
                <div className='w-2/6 h-full pr-10 flex justify-center items-center content-center flex-wrap'>
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
                <div className='w-4/6 h-full pl-20 flex justify-center items-center content-center flex-wrap'>
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
            className='box-education relative mt-5 p-4 rounded-lg border w-full h-[150px] flex justify-center items-center content-center flex-wrap shadow-lg'
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
                className={`popup absolute top-1/2 left-[220%] transform -translate-x-full -translate-y-1/2 w-[500px] p-4 shadow-lg rounded-lg z-10 transition-opacity duration-300 ease-in-out
                    ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <h3 className='font-bold text-white'>{t('education-details-title')}</h3>
                <p className='text-sm text-justify'>
                    {details}
                </p>
                <div className='com-circule first-circule absolute' />
                <div className='com-circule second-circule absolute' />
            </div>
        </div>
    );
}

function ContainerSkill({ label, items = [] }) {
    return (
        <div className='skill-container border-l border-gray-500 w-full h-auto pl-5 pr-5 pb-3 mt-5 mb-5'>
            <h3 className='text-left w-full mb-3 text-xl'>{label}</h3>
            <div className='items flex flex-wrap'>
                {items.map((item, index) => (
                    <SkillBox
                        key={index}
                        label={item.label}
                        sourceImage={item.sourceImage}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillBox({ label, sourceImage }) {
    return (
        <div className='skill-box w-auto rounded-xl border flex justify-center items-center flex-col p-5 gap-2 cursor-pointer shadow-lg relative'>
            <a className='absolute rounded-full border border-gray-500 h-8 w-8 top-1 right-1 transition-all ease-in shadow-lg'></a>
            <img src={sourceImage} alt="skill" className='w-[55px] h-[55px] rounded-xl shadow-lg' />
            <label className='w-full h-auto font-bold text-base'>{label}</label>
        </div>
    );
}

export default SkillsSection;