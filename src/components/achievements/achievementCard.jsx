import React from 'react';
import './Achievement.css';

const ProjectCard = ({
    achievementName,
    achievementDescription,
    imageUrl,
    videoUrl,
    achievementUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={achievementUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{achievementName}</h2>
                <p className='project-details'>{ achievementDescription}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
