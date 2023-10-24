import React, { useState } from 'react';

export default function Alert() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0001 45.8332C36.506 45.8332 45.8334 36.5058 45.8334 24.9998C45.8334 13.4939 36.506 4.1665 25.0001 4.1665C13.4941 4.1665 4.16675 13.4939 4.16675 24.9998C4.16675 36.5058 13.4941 45.8332 25.0001 45.8332Z" stroke="#F8A849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 16.6665V24.9998" stroke="#F8A849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 33.3335H25.0208" stroke="#F8A849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Masukkan Password</div>
                    <button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={handleClose}
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}

        </>
    );
}
