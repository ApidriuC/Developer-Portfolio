import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardProps } from 'types/props';
import * as assets from '../../assets';
import { SectionFrame } from '../common';

export const ProjectsSection = () => {
    const { t } = useTranslation();

    const projects: CardProps[] = [
        {
            width: 70,
            height: 40,
            title: 'EDESK Prisma',
            link: 'https://edeskprisma.syc.com.co/NoClient.html',
            image: assets.edeskPrismaImage,
            tags: [
                { image: assets.cSharpImage, alt: 'C#' },
                { image: assets.netFrameworkImage, alt: '.NET Framework' },
                { image: assets.javascriptImage, alt: 'JavaScript' },
                { image: assets.htmlImage, alt: 'HTML' },
                { image: assets.styleSheetImage, alt: 'CSS' },
                { image: assets.boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 50,
            height: 55,
            title: 'Stream For Labs',
            link: 'https://github.com/IngDeiver/streams-for-labs-web-client',
            image: assets.streamLabsImage,
            tags: [
                { image: assets.nodeJsImage, alt: 'Node.js' },
                { image: assets.reactImage, alt: 'React' },
                { image: assets.javascriptImage, alt: 'JavaScript' },
                { image: assets.tailwindcssImage, alt: 'Tailwind CSS' },
                { image: assets.boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 55,
            height: 55,
            title: 'SyCaptcha',
            link: 'https://github.com/ApidriuC/SyCaptcha.Client',
            image: assets.SyCaptcha,
            tags: [
                { image: assets.htmlImage, alt: 'HTML' },
                { image: assets.styleSheetImage, alt: 'CSS' },
                { image: assets.javascriptImage, alt: 'JavaScript' },
                { image: assets.typeScriptImage, alt: 'TypeScript' },
                { image: assets.reactImage, alt: 'React' },
                { image: assets.cSharpImage, alt: 'C#' },
                { image: assets.netFrameworkImage, alt: '.NET Framework' }
            ]
        },
        {
            width: 80,
            height: 45,
            title: 'Dispensador - Casa Libro Total',
            image: assets.dispensadorImage,
            tags: [
                { image: assets.cSharpImage, alt: 'C#' },
                { image: assets.netFrameworkImage, alt: '.NET Framework' },
                { image: assets.javascriptImage, alt: 'JavaScript' },
                { image: assets.htmlImage, alt: 'HTML' },
                { image: assets.styleSheetImage, alt: 'CSS' },
                { image: assets.boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 70,
            height: 40,
            title: 'MercAnalyzer - WebScraping',
            link: 'https://github.com/ApidriuC/MercAnalyzer.Client',
            image: assets.MercAnalyzer,
            tags: [
                { image: assets.htmlImage, alt: 'HTML' },
                { image: assets.styleSheetImage, alt: 'CSS' },
                { image: assets.javascriptImage, alt: 'JavaScript' },
                { image: assets.typeScriptImage, alt: 'TypeScript' },
                { image: assets.reactImage, alt: 'React' },
                { image: assets.nodeJsImage, alt: 'Node.js' },
                { image: assets.pythonImage, alt: 'python' }
            ]
        },
        {
            width: 50,
            height: 45,
            title: t('bingo-project-label'),
            link: 'https://github.com/ApidriuC/Bingo_Alcaldia_Risaralda',
            image: assets.bingoImage,
            tags: [{ image: assets.javaImage, alt: 'Java' }]
        }
    ];

    return (
        <SectionFrame id='projects-me' className='h-auto p-20'>
            <div className='h-full w-full flex justify-center items-start flex-wrap'>
                {/* Título */}
                <div className='w-full mb-5'>
                    <h2 className='text-left text-5xl md:text-5xl xs:text-4xl border-b-2 border-purple-400 mb-2 pl-3 pr-3 w-max'>
                        {t('projects-title')}
                    </h2>
                    <p className='text-left pt-2 pb-5 w-3/4 md:text-lg xs:text-sm xs:w-full xs:pb-0'>
                        {t('projects-desc')} 📚
                    </p>
                </div>

                {/* Projects */}
                <div className='container-projects m-12 w-full flex items-center justify-center flex-wrap md:gap-20 xs:gap-5 xs:m-0'>
                    {projects.map((project, index) => <Cards key={index} {...project} />)}
                </div>
            </div>
        </SectionFrame>
    );
}

const Cards = React.memo(({ title, width, height, link, image, tags }: CardProps) => {
    return (
        <article
            style={{ width: `${width}vh`, height: `${height}vh` }}
            className={`relative xs:w-[40vh] xs:h-[30vh] rounded-lg hover:rounded-3xl overflow-hidden duration-[350ms] transition-all ease-expo group shadow-2xl`}>
            <a className='block w-full h-full z-10' href={link || '#'} target='_blank' rel='noreferrer'>
                <div className='relative w-full h-full'>
                    <img
                        className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95'
                        src={image}
                        alt={`${title}_img`}
                    />
                </div>

                {/* Etiquetas */}
                <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap 
                xs:opacity-100 md:opacity-0 group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                    <h2 className='text-white w-full text-left text-4xl md:text-4xl xs:text-2xl'>{title}</h2>
                    {tags.map((tag, index) => <img key={index} src={tag.image} alt={tag.alt} className='object-center h-7' />)}
                </div>
            </a>
        </article>
    );
});