import ReactDOM from 'react-dom';
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = (message, duration = 2000) => {
        setNotification({ message });
        //setTimeout(() => setNotification(null), duration);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && ReactDOM.createPortal(
                <div className="notification-message fixed transform mt-4 animate-slideIn">
                    <div className="p-4 bg-slate-900 border-white text-white rounded shadow-lg">
                        {notification.message}
                    </div>
                </div>,
                document.body
            )}
        </NotificationContext.Provider>
    );
};