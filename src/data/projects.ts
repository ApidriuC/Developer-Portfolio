import { Project } from 'types/props';
import * as assets from '../assets';

/**
 * Para añadir un proyecto: agrega un objeto nuevo a este array.
 *  - visibility: 'public'  -> código/repositorio abierto (se muestra "Ver" / "Código")
 *  - visibility: 'private' -> proyecto empresarial/confidencial (se muestra como contribución)
 *  - descKey: clave i18n opcional para una descripción corta (en es.json / en.json)
 */
export const projects: Project[] = [
    {
        title: 'EDESK Prisma',
        descKey: 'project-edesk-desc',
        link: 'https://edeskprisma.syc.com.co/NoClient.html',
        image: assets.edeskPrismaImage,
        visibility: 'private',
        gradient: 'linear-gradient(135deg, rgb(168, 202, 186) 0%, rgb(93, 65, 87) 100%)',
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
        title: 'Stream For Labs',
        descKey: 'project-streamlabs-desc',
        link: 'https://github.com/IngDeiver/streams-for-labs-web-client',
        image: assets.streamLabsImage,
        visibility: 'public',
        gradient: 'linear-gradient(135deg, rgb(100, 179, 244) 0%, rgb(194, 229, 156) 100%)',
        tags: [
            { image: assets.nodeJsImage, alt: 'Node.js' },
            { image: assets.reactImage, alt: 'React' },
            { image: assets.javascriptImage, alt: 'JavaScript' },
            { image: assets.tailwindcssImage, alt: 'Tailwind CSS' },
            { image: assets.boostrapImage, alt: 'Bootstrap' }
        ]
    },
    {
        title: 'SyCaptcha',
        descKey: 'project-sycaptcha-desc',
        link: 'https://github.com/ApidriuC/SyCaptcha.Client',
        image: assets.SyCaptcha,
        visibility: 'private',
        gradient: 'linear-gradient(135deg, rgb(135, 77, 162) 0%, rgb(196, 58, 48) 100%)',
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
        title: 'Dispensador - Casa Libro Total',
        descKey: 'project-dispensador-desc',
        image: assets.dispensadorImage,
        visibility: 'private',
        gradient: 'linear-gradient(135deg, rgb(19, 84, 122) 0%, rgb(128, 208, 199) 100%)',
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
        title: 'MercAnalyzer - WebScraping',
        descKey: 'project-mercanalyzer-desc',
        link: 'https://github.com/ApidriuC/MercAnalyzer.Client',
        image: assets.MercAnalyzer,
        visibility: 'public',
        gradient: 'linear-gradient(135deg, rgb(58, 181, 176) 0%, rgb(86, 49, 122) 100%)',
        tags: [
            { image: assets.htmlImage, alt: 'HTML' },
            { image: assets.styleSheetImage, alt: 'CSS' },
            { image: assets.javascriptImage, alt: 'JavaScript' },
            { image: assets.typeScriptImage, alt: 'TypeScript' },
            { image: assets.reactImage, alt: 'React' },
            { image: assets.nodeJsImage, alt: 'Node.js' },
            { image: assets.pythonImage, alt: 'Python' }
        ]
    },
    {
        title: 'Bingo',
        titleKey: 'bingo-project-label',
        descKey: 'project-bingo-desc',
        link: 'https://github.com/ApidriuC/Bingo_Alcaldia_Risaralda',
        image: assets.bingoImage,
        visibility: 'public',
        gradient: 'linear-gradient(135deg, rgb(147, 165, 207) 0%, rgb(118, 75, 162) 100%)',
        tags: [{ image: assets.javaImage, alt: 'Java' }]
    }
];
