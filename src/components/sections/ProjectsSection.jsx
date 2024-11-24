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

function ProjectsSection() {
    const { t } = useTranslation();

    const projects = [
        {
            title: 'EDESK PRISMA',
            link: 'https://edeskprisma.syc.com.co/NoClient.html',
            image: edeskPrismaImage,
            tags: [cSharpImage, netFrameworkImage, javascriptImage, htmlImage, styleSheetImage, boostrapImage]
        },
        {
            title: 'Stream For Labs',
            link: 'https://github.com/IngDeiver/streams-for-labs-web-client',
            image: streamLabsImage,
            tags: [nodeJsImage, reactImage, javascriptImage, tailwindcssImage, boostrapImage]
        },
        {
            title: 'DDA Bookings',
            link: 'https://github.com/ApidriuC/DDA-BOOKINGS-Dispositivos-Moviles',
            image: bookingsImage,
            tags: [reactImage, javascriptImage]
        },
        {
            title: 'Dispensador - Casa Libro Total',
            link: '',
            image: dispensadorImage,
            tags: [cSharpImage, netFrameworkImage, javascriptImage, htmlImage, styleSheetImage, boostrapImage]
        },
        {
            title: t('bingo-project-label'),
            link: 'https://github.com/ApidriuC/Bingo_Alcaldia_Risaralda',
            image: bingoImage,
            tags: [javaImage]
        },
        {
            title: 'Fox Game',
            link: 'https://github.com/ApidriuC/FoxGame---Construct3',
            image: foxGameImage,
            tags: [construct3Image]
        }
    ];

    return (
        <section id='projects-me' className='h-auto p-20'>
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
                    {projects.map((project, index) => (<Cards key={index} {...project} />))}
                </div>
            </div>
        </section>
    );
}

const Cards = ({ title, link, image, tags }) => {
    // Generar un número aleatorio entre 56 y 80 para el width
    const widthRandom = Math.floor(Math.random() * (80 - 56 + 1)) + 56;

    // Generar un número aleatorio entre 40 y 60 para el height
    const heightRandom = Math.floor(Math.random() * (60 - 35 + 1)) + 35;

    return (
        <article
            style={{
                width: `${widthRandom}vh`,
                height: `${heightRandom}vh`,
            }}
            className={`relative xs:w-[40vh] xs:h-[30vh] rounded-lg hover:rounded-3xl overflow-hidden duration-[350ms] transition-all ease-expo group shadow-2xl`}
        >
            <a className='block w-full h-full z-10' href={link} target='_blank' rel='noreferrer'>
                <div className='relative w-full h-full'>
                    <img
                        className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95'
                        src={image}
                        alt={`${title}_img`}
                    />
                </div>

                {/* Etiquetas */}
                <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap xs:opacity-100 md:opacity-0 group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                    <h2 className='text-white w-full text-left text-4xl md:text-4xl xs:text-2xl'>{title}</h2>
                    {tags.map((tag, index) => (<img key={index} className='object-center h-7' src={tag} alt={`tag_${index}`} />))}
                </div>
            </a>
        </article>
    );
};

export default ProjectsSection;