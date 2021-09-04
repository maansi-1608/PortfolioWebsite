import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { achievementData } from '../../assets/achievementsData';
import achievementCard from './achievementCard';
import './achievements.css';

const Achievemnets = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Achievements.'
                details="Here are a few things that I am proud of from my journey as a Developer!"
            />

            <div className='achievements-cards-container'>
                {achievementData.map(
                    ({
                        achievementName,
                        achievementDescription,
                        imageUrl,
                        achievementUrl,
                    }) => {
                        return (
                            <achievementCard
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

export default Achievemnets;
