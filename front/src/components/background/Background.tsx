import React from 'react';
import './Background.css'
const Background = () => {
    const hotdogCount = Math.floor(Math.random() * 6) + 10; // Випадкове число від 10 до 15

    const hotdogElements = Array.from({ length: hotdogCount }).map((_, index) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDelay = Math.random();

        return (
            <div
                key={index}
                className="hotdog"
                style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    animationDelay: `${randomDelay}s`,
                }}
            >
                🌭
            </div>
        );
    });

    return <div className="background-container">{hotdogElements}</div>;
};

export default Background;
