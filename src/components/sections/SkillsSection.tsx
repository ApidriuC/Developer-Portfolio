import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSkillProps, EducationBoxProps, SkillBoxProps } from 'types/props';
import * as assets from '../../assets';
import { Form, SectionFrame } from '../common';

const containersSkills: ContainerSkillProps[] = [
    {
        label: 'Front-End',
        skills: [
            { label: 'React', sourceImage: assets.reactImage, sourceLink: 'https://es.react.dev' },
            { label: 'NextJS', sourceImage: assets.NextJs, sourceLink: 'https://nextjs.org' },
            { label: 'JavaScript', sourceImage: assets.javascriptImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
            { label: 'TypeScript', sourceImage: assets.typeScriptImage, sourceLink: 'https://www.typescriptlang.org' },
            { label: 'JQuery', sourceImage: assets.jQuery, sourceLink: 'https://jquery.com' },
            { label: 'CSS', sourceImage: assets.styleSheetImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/CSS' },
            { label: 'Boostrap', sourceImage: assets.boostrapImage, sourceLink: 'https://getbootstrap.com' },
            { label: 'Tailwind', sourceImage: assets.tailwindcssImage, sourceLink: 'https://tailwindcss.com' },
            { label: 'HTML', sourceImage: assets.htmlImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/HTML' }
        ]
    },
    {
        label: 'Back-End',
        skills: [
            { label: 'NodeJs', sourceImage: assets.nodeJsImage, sourceLink: 'https://nodejs.org/en' },
            { label: '.NET', sourceImage: assets.netCore, sourceLink: 'https://dotnet.microsoft.com/es-es' },
            { label: 'C#', sourceImage: assets.cSharpImage, sourceLink: 'https://learn.microsoft.com/es-es/dotnet/csharp' },
            { label: 'Java', sourceImage: assets.javaImage, sourceLink: 'https://www.java.com/es' },
            { label: 'Python', sourceImage: assets.pythonImage, sourceLink: 'https://www.python.org' },
            { label: 'Docker', sourceImage: assets.dockerImage, sourceLink: 'https://www.docker.com' }
        ]
    },
    {
        label: 'Database',
        skills: [
            { label: 'SQL Server', sourceImage: assets.sqlImage, sourceLink: 'https://www.microsoft.com/es-co/sql-server/sql-server-downloads' },
            { label: 'Oracle', sourceImage: assets.oracleImage, sourceLink: 'https://www.oracle.com/co' },
            { label: 'MySQL', sourceImage: assets.mySqlLogo, sourceLink: 'https://www.mysql.com' }
        ]
    },
    {
        label: 'Cloud',
        skills: [
            { label: 'Azure', sourceImage: assets.azureImage, sourceLink: 'https://azure.microsoft.com/es-es' },
            { label: 'AWS', sourceImage: assets.awsImage, sourceLink: 'https://aws.amazon.com/es' }
        ]
    },
    {
        label: 'Frameworks',
        skills: [
            { label: 'GIT', sourceImage: assets.gitImage, sourceLink: 'https://git-scm.com' },
            { label: 'Visual Studio Code', sourceImage: assets.vsCodeImage, sourceLink: 'https://code.visualstudio.com' },
            { label: 'Visual Studio 2022', sourceImage: assets.visualImage, sourceLink: 'https://visualstudio.microsoft.com/es/vs' }
        ]
    }
];

export const SkillsSection = () => {
    const { t } = useTranslation();

    const educationOptns: EducationBoxProps[] = [
        { year: '2023', label: t('education-title-1'), value: t('education-place-1'), description: t('education-details-1'), support: assets.SupActaGrado },
        { year: '2023', label: t('education-title-2'), value: t('education-place-2'), description: t('education-details-2'), support: assets.SupVeracode },
        { year: '2022', label: t('education-title-3'), value: t('education-place-3'), description: t('education-details-3'), support: assets.SupMintic },
        { year: '2021', label: t('education-title-4'), value: t('education-place-4'), description: t('education-details-4'), support: assets.SupCongresoIng }
    ];

    return (
        <SectionFrame id='skills-me' className='h-auto p-20'>
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
                    {educationOptns.map((option, index) => <EducationBox key={index} {...option} />)}
                </div>

                {/* Skills */}
                <div className='w-full md:w-2/3 pl-20 flex justify-center items-center content-center flex-wrap xs:pr-0 xs:pt-5 xs:pl-0 md:pt-0'>
                    {containersSkills.map((option, index) => <ContainerSkill key={index} {...option} />)}
                </div>
            </div>
        </SectionFrame>
    );
}

const EducationBox = ({ year, label, value, description, support }: EducationBoxProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleFormVisibility = useCallback(() => setIsVisible(!isVisible), [isVisible]);

    return (
        <div
            className='box-education relative z-[1] p-4 rounded-lg border w-full h-[150px] max-w-[500px] xs:max-w-none xs:h-[120px] md:h-[150px] 
                flex justify-center items-center content-center flex-wrap shadow-lg'
            onClick={toggleFormVisibility}
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

            {/* Renderizar modal */}
            {isVisible && (
                <Form
                    className='form_education'
                    onClose={toggleFormVisibility}
                >
                    <div className='text_side text-center w-full grid place-items-center md:p-4 xs:p-0'>
                        <h2 className='md:text-4xl xs:text-xl'>{label}</h2>
                        <h6 className='italic md:text-lg xs:text-sm'>{value}</h6>
                    </div>
                    <p className='text-justify md:text-base xs:text-xs xs:p-2'>
                        {description}
                    </p>
                    <div className='flex justify-center items-center pt-2'>
                        <img alt={`image_${label}`} src={support} className='image_experience md:h-[45vh] xs:h-auto' />
                    </div>
                </Form>
            )}
        </div>
    );
}

const ContainerSkill = React.memo(({ label, skills }: ContainerSkillProps) => {
    return (
        <div className='skill-container border-l border-gray-500 w-full h-auto pl-5 pr-5 pb-3 mb-5 xs:p-[0] xs:pl-3 md:pl-5'>
            <h3 className='text-left w-full mb-3 text-xl'>{label}</h3>
            <div className='items flex flex-wrap gap-4'>
                {skills.map((skill, index) => <SkillBox key={index} {...skill} />)}
            </div>
        </div>
    )
});

const goToPage = (sourceLink: string) => window.open(sourceLink, '_blank');

const SkillBox = React.memo(({ label, sourceImage, sourceLink }: SkillBoxProps) => {
    return (
        <div className='skill-box w-[180px] rounded-xl border flex justify-center items-center flex-col p-5 gap-2 cursor-pointer shadow-lg relative xs:w-[95px] md:w-[180px]'
            onClick={() => goToPage(sourceLink)}
        >
            <a className='absolute rounded-full border border-gray-500 h-8 w-8 top-1 right-1 transition-all ease-in shadow-lg' />
            <img src={sourceImage} alt={`Icono de ${label}`} className='w-[55px] h-[55px] rounded-full shadow-lg xs:w-[30px] xs:h-[30px] md:w-[55px] md:h-[55px]' />
            <label className='w-full h-auto font-bold text-base cursor-pointer xs:text-xs md:text-base'>{label}</label>
        </div>
    );
});