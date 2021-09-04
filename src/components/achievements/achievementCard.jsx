import React from 'react';
import './achievements.css';

const achievementCard = ({
    achievementName,
    achievementDescription,
    imageUrl,
    achievementUrl,
}) => {
    return (
        <div className='achievement-card'>
            <div className='image-container'>
                <a href={achievementUrl} className='achievement-external-link'>
                    <img
                        src={imageUrl}
                        alt='achievement'
                        className='achievement-image'
                    />
                </a>
            </div>

            <div className='achievement-details-container'>
                <h2 className='achievement-heading'>{achievementName}</h2>
                <p className='achievement-details'>{achievementDescription}</p>
            </div>
        </div>
    );
};

export default achievementCard;