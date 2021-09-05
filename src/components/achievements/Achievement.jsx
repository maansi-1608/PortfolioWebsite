import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { achievementData } from '../../assets/achievementsData';
import ProjectCard from './AchievementCard';
import './Achievement.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Achievements.'
                details="Here are a few thing that I am proud of from my journey as a developer so far."
            />

            <div className='project-cards-container'>
                {achievementData.map(
                    ({
                        achievementName,
                        achievementDescription,
                        imageUrl,
                        achievementUrl,
                    }) => {
                        return (
                            <ProjectCard
                                achievementName={achievementName}
                                achievementDescription={achievementDescription}
                                achievementUrl={achievementUrl}
                                imageUrl={imageUrl}
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;
