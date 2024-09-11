import ReactDOM from 'react-dom';
import React, { createContext, useContext, useState, useRef } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const timeoutRef = useRef(null);
    const [notification, setNotification] = useState(null);

    const showNotification = (message, duration = 2000) => {
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
                <div className="top-[35px] left-1/2 transform -translate-x-1/2 fixed animate-alertSlideIn">
                    <div className="border border-white/20 bg-gray-800/50 rounded-lg p-4 text-white shadow-lg">
                        {notification.message}
                    </div>
                </div>,
                document.body
            )}
        </NotificationContext.Provider>
    );
};