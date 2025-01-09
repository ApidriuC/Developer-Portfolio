import ReactDOM from 'react-dom';
import { createContext, useContext, useState, useRef } from 'react';
import { NotificationProviderProps, Notification } from 'types/props';

interface NotificationContextProps {
    showNotification: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | null>(null);

export const useNotification = (): NotificationContextProps => {
    const currentContext = useContext(NotificationContext);

    if (!currentContext) {
        throw new Error('Error: useNotification debe ser usado dentro de un NotificationProvider');
    }

    return currentContext;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
    const timeoutRef = useRef<number | null>(null);
    const [notification, setNotification] = useState<Notification | null>(null);

    const showNotification = (message: string, duration: number = 2000) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setNotification({ message });

        timeoutRef.current = setTimeout(() => {
            setNotification(null);
            timeoutRef.current = null;
        }, duration);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && ReactDOM.createPortal(
                <div className='top-[35px] left-1/2 transform -translate-x-1/2 fixed animate-alertSlideIn'>
                    <div className='border border-white/20 bg-gray-800/50 rounded-lg p-4 text-white shadow-lg'>
                        {notification.message}
                    </div>
                </div>,
                document.body
            )}
        </NotificationContext.Provider>
    );
};