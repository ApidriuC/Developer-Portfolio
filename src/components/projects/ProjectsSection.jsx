import { useTranslation } from 'react-i18next';
import cImage from '../../assets/logo-c.svg'
import netImage from '../../assets/net-frame.png';
import reactImage from '../../assets/react-logo.png';
import streamLabs from '../../assets/stream-labs.png';
import nodeImage from '../../assets/nodejs-white.png';
import jsImage from '../../assets/logo-javascript.png';
import htmlImage from '../../assets/icon-html.jpg'
import cssImage from '../../assets/logo-css.png'
import boostrapImage from '../../assets/logo-boostrap.svg'
import edeskPrisma from '../../assets/edesk-prisma.png'
import foxGame from '../../assets/FOXGAME.png'
import construct3 from '../../assets/construct3.jpg'
import bookings from '../../assets/DDABOOKING.png'
import tailwindcss from '../../assets/logo-tailwind.png'
import dispensadorR from '../../assets/dispensador-registro.png'
import bingo from '../../assets/bingoResultado.png'
import javaImage from '../../assets/Java-Logo.png'

function ProjectsSection() {
    const { t } = useTranslation();

    return (
        <section id='projects-me' className='h-auto p-20'>
            <div className='h-full w-full flex justify-center items-start flex-wrap'>
                {/* Titulo */}
                <div className='w-full mb-5'>
                    <h2 className='text-left text-5xl'>
                        {t('projects-title')}
                    </h2>
                    <p className='text-left pt-2 pb-5 w-3/4'>
                        {t('projects-desc')} 📚
                    </p>
                </div>

                {/* Projects */}
                <div className='container-projects m-12 w-full flex items-center justify-center flex-wrap gap-40'>
                    <article className='w-[80vh] h-[75vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10:' href='https://edeskprisma.syc.com.co/santander' target='_blank'>
                            <div className='bg-container-1 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={edeskPrisma} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>EDESK PRISMA</h2>
                                <img className='object-center h-7' src={cImage} alt='source_img' />
                                <img className='object-center h-7' src={netImage} alt='source_img' />
                                <img className='object-center h-7' src={jsImage} alt='source_img' />
                                <img className='object-center h-7' src={htmlImage} alt='source_img' />
                                <img className='object-center h-7' src={cssImage} alt='source_img' />
                                <img className='object-center h-7' src={boostrapImage} alt='source_img' />
                            </div>
                        </a>
                    </article>

                    <article className='w-[60vh] h-[50vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10 rounded-lg group-hover:rounded-3xl:' href='https://github.com/IngDeiver/streams-for-labs-web-client' target='_blank'>
                            <div className='bg-container-2 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={streamLabs} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>Stream For Labs</h2>
                                <img className='object-center h-7' src={nodeImage} alt='source_img' />
                                <img className='object-center h-7' src={reactImage} alt='source_img' />
                                <img className='object-center h-7' src={jsImage} alt='source_img' />
                                <img className='object-center h-7' src={tailwindcss} alt='source_img' />
                                <img className='object-center h-7' src={boostrapImage} alt='source_img' />
                            </div>
                        </a>
                    </article>
                </div>

                <div className='container-projects m-12 w-full flex items-center justify-center flex-wrap gap-40'>
                    <article className='w-[55vh] h-[55vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10 rounded-lg group-hover:rounded-3xl:' href='https://github.com/ApidriuC/DDA-BOOKINGS-Dispositivos-Moviles' target='_blank'>
                            <div className='bg-container-3 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={bookings} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>DDA Bookings</h2>
                                <img className='object-center h-7' src={reactImage} alt='source_img' />
                                <img className='object-center h-7' src={jsImage} alt='source_img' />
                            </div>
                        </a>
                    </article>

                    <article className='w-[95vh] h-[80vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10 rounded-lg group-hover:rounded-3xl:'>
                            <div className='bg-container-4 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={dispensadorR} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>Dispensador - Casa Libro Total</h2>
                                <img className='object-center h-7' src={cImage} alt='source_img' />
                                <img className='object-center h-7' src={netImage} alt='source_img' />
                                <img className='object-center h-7' src={jsImage} alt='source_img' />
                                <img className='object-center h-7' src={htmlImage} alt='source_img' />
                                <img className='object-center h-7' src={cssImage} alt='source_img' />
                                <img className='object-center h-7' src={boostrapImage} alt='source_img' />
                            </div>
                        </a>
                    </article>
                </div>

                <div className='container-projects m-12 w-full flex items-center justify-center flex-wrap gap-40'>
                    <article className='w-[95vh] h-[80vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10 rounded-lg group-hover:rounded-3xl:' href='https://github.com/ApidriuC/Bingo_Alcaldia_Risaralda' target='_blank'>
                            <div className='bg-container-5 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={bingo} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>{t('bingo-project-label')}</h2>
                                <img className='object-center h-7' src={javaImage} alt='source_img' />
                            </div>
                        </a>
                    </article>

                    <article className='w-[55vh] h-[55vh] relative rounded-lg hover:rounded-3xl overflow-hidden  duration-[350ms] transition-all ease-expo group shadow-2xl'>
                        <a className='block w-full h-full z-10 rounded-lg group-hover:rounded-3xl:' href='https://github.com/ApidriuC/FoxGame---Construct3' target='_blank'>
                            <div className='bg-container-6 relative w-full h-full'>
                                <img className='w-full h-full object-contain object-center scale-90 duration-[350ms] transition-all ease-expo group-hover:scale-95' src={foxGame} alt='source_img' />
                            </div>

                            {/* Etiquetas */}
                            <div className='overlay cursor-pointer absolute p-4 flex justify-start items-baseline content-end flex-wrap group-hover:opacity-100 h-full w-full top-0 left-0 gap-3'>
                                <h2 className='text-white w-full text-left text-4xl'>Fox Game</h2>
                                <img className='object-center h-7' src={construct3} alt='source_img' />
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;