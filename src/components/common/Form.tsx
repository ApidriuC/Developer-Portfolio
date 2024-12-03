import ReactDOM from 'react-dom';
import { useState } from 'react';
import { FormProps } from 'types/props';

export const Form: React.FC<FormProps> = ({ className, children, onClose }) => {
    const [animation, setAnimation] = useState<string>('animate__fadeIn');

    const hideForm = (event: React.MouseEvent) => {
        event.stopPropagation();
        setAnimation('animate__fadeOut');
        setTimeout(onClose, 700);
    }

    return (
        <>
            {ReactDOM.createPortal(
                <div
                    className={`back_form ${animation} animate__animated fixed top-0 left-0 h-full w-full bg-[#000000c9] transition-all ease-in z-[999999999999]`}
                    onClick={e => hideForm(e)}
                >
                    <div
                        className={`${className} form_container absolute top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%] lg:h-[80%] lg:w-2/3 xs:w-[90%] p-2 shadow-2xl`}
                        onClick={e => e.stopPropagation()}>
                        <div className='form_body h-[calc(100%-4rem)] w-full md:pl-8 md:pr-8 pt-4 pb-4 xs:p-2 overflow-auto xs:max-h-[75vh] lg:max-h-[85vh]'>
                            {children}
                        </div>
                        <div className='form_footer h-16 grid place-items-center'>
                            <button
                                className='h-10 w-auto xs:py-2 xs:px-12'
                                onClick={e => hideForm(e)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>

    );
};
