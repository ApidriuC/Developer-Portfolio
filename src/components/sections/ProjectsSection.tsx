import React from 'react';
import { CardProps } from 'types/props';
import { SectionFrame } from '../common';
import { useTranslation } from 'react-i18next';
import {
    htmlImage,
    javaImage,
    bingoImage,
    reactImage,
    nodeJsImage,
    cSharpImage,
    foxGameImage,
    boostrapImage,
    bookingsImage,
    construct3Image,
    streamLabsImage,
    javascriptImage,
    styleSheetImage,
    edeskPrismaImage,
    tailwindcssImage,
    dispensadorImage,
    netFrameworkImage
} from '../../assets';

export const ProjectsSection = () => {
    const { t } = useTranslation();

    const projects: CardProps[] = [
        {
            width: 70,
            height: 40,
            title: 'EDESK PRISMA',
            link: 'https://edeskprisma.syc.com.co/NoClient.html',
            image: edeskPrismaImage,
            tags: [
                { image: cSharpImage, alt: 'C#' },
                { image: netFrameworkImage, alt: '.NET Framework' },
                { image: javascriptImage, alt: 'JavaScript' },
                { image: htmlImage, alt: 'HTML' },
                { image: styleSheetImage, alt: 'CSS' },
                { image: boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 50,
            height: 55,
            title: 'Stream For Labs',
            link: 'https://github.com/IngDeiver/streams-for-labs-web-client',
            image: streamLabsImage,
            tags: [
                { image: nodeJsImage, alt: 'Node.js' },
                { image: reactImage, alt: 'React' },
                { image: javascriptImage, alt: 'JavaScript' },
                { image: tailwindcssImage, alt: 'Tailwind CSS' },
                { image: boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 70,
            height: 55,
            title: 'DDA Bookings',
            link: 'https://github.com/ApidriuC/DDA-BOOKINGS-Dispositivos-Moviles',
            image: bookingsImage,
            tags: [
                { image: reactImage, alt: 'React' },
                { image: javascriptImage, alt: 'JavaScript' }
            ]
        },
        {
            width: 80,
            height: 45,
            title: 'Dispensador - Casa Libro Total',
            image: dispensadorImage,
            tags: [
                { image: cSharpImage, alt: 'C#' },
                { image: netFrameworkImage, alt: '.NET Framework' },
                { image: javascriptImage, alt: 'JavaScript' },
                { image: htmlImage, alt: 'HTML' },
                { image: styleSheetImage, alt: 'CSS' },
                { image: boostrapImage, alt: 'Bootstrap' }
            ]
        },
        {
            width: 50,
            height: 45,
            title: t('bingo-project-label'),
            link: 'https://github.com/ApidriuC/Bingo_Alcaldia_Risaralda',
            image: bingoImage,
            tags: [{ image: javaImage, alt: 'Java' }]
        },
        {
            width: 75,
            height: 55,
            title: 'Fox Game',
            link: 'https://github.com/ApidriuC/FoxGame---Construct3',
            image: foxGameImage,
            tags: [{ image: construct3Image, alt: 'Construct 3' }]
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