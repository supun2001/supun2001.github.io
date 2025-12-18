import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 100, pause = 2000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;

        const handleAction = () => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < text.length) {
                    setCurrentText(text.substring(0, currentText.length + 1));
                } else {
                    // Start deleting after pause
                    timer = setTimeout(() => setIsDeleting(true), pause);
                    return;
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(text.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    return;
                }
            }
        };

        const speed = isDeleting ? delay / 2 : delay;
        timer = setTimeout(handleAction, speed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, text, delay, pause]);

    return <div id="typewriter" className="hero-name">{currentText}</div>;
};

export default Typewriter;
