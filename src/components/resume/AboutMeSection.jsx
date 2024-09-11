import MeImage from '../../assets/me-image-profile.jpeg';

function AboutMeSection() {
    return (
        <section id='about-me' className='flex justify-center items-center h-screen'>
            <div className='w-2/4 p-4 h-full flex justify-center items-center'>
                <img
                    alt="me-image"
                    src={MeImage}
                    className='w-[30rem] h-[30rem] rounded-full object-cover object-left-bottom'
                />
            </div>
            <div className='w-2/4 p-4 h-full flex justify-center items-center'>
                <div>
                    <p>Quien soy</p>
                    <h2>Sobre mí</h2>
                </div>
                <div>
                    <p>
                        
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;