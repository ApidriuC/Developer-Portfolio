import * as assets from '../assets';
import { ContainerSkillProps } from 'types/props';

/** Para añadir una tecnología: agrega un objeto al array `skills` de la categoría correspondiente. */
export const containersSkills: ContainerSkillProps[] = [
    {
        label: 'Front-End',
        skills: [
            { label: 'React', sourceImage: assets.reactImage, sourceLink: 'https://es.react.dev' },
            { label: 'Angular', sourceImage: assets.angularImage, sourceLink: 'https://angular.dev' },
            { label: 'NextJS', sourceImage: assets.NextJs, sourceLink: 'https://nextjs.org' },
            { label: 'JavaScript', sourceImage: assets.javascriptImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
            { label: 'TypeScript', sourceImage: assets.typeScriptImage, sourceLink: 'https://www.typescriptlang.org' },
            { label: 'JQuery', sourceImage: assets.jQuery, sourceLink: 'https://jquery.com' },
            { label: 'CSS', sourceImage: assets.styleSheetImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/CSS' },
            { label: 'Bootstrap', sourceImage: assets.boostrapImage, sourceLink: 'https://getbootstrap.com' },
            { label: 'Tailwind', sourceImage: assets.tailwindcssImage, sourceLink: 'https://tailwindcss.com' },
            { label: 'HTML', sourceImage: assets.htmlImage, sourceLink: 'https://developer.mozilla.org/es/docs/Web/HTML' }
        ]
    },
    {
        label: 'Back-End',
        skills: [
            { label: 'NodeJs', sourceImage: assets.nodeJsImage, sourceLink: 'https://nodejs.org/en' },
            { label: 'NestJS', sourceImage: assets.nestJsImage, sourceLink: 'https://nestjs.com' },
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
            { label: 'MySQL', sourceImage: assets.mySqlLogo, sourceLink: 'https://www.mysql.com' },
            { label: 'PostgreSQL', sourceImage: assets.postgreSqlImage, sourceLink: 'https://www.postgresql.org' }
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
        label: 'Tools',
        skills: [
            { label: 'GIT', sourceImage: assets.gitImage, sourceLink: 'https://git-scm.com' },
            { label: 'Visual Studio Code', sourceImage: assets.vsCodeImage, sourceLink: 'https://code.visualstudio.com' },
            { label: 'Visual Studio 2022', sourceImage: assets.visualImage, sourceLink: 'https://visualstudio.microsoft.com/es/vs' }
        ]
    }
];
