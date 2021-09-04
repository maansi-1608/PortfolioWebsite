import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';

import './NavBar.css';

class NavBar extends React.Component {
    render() {
        const { location } = this.props;

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass =
            location.pathname === '/projects' ? 'active-item' : '';
        const achievementsClass =
        location.pathname === '/achievements' ? 'active-item' : '';
        const workExperienceClass =
            location.pathname === '/workExperience' ? 'active-item' : '';
        const skillsClass =
            location.pathname === '/skills' ? 'active-item' : '';
        const contactClass =
            location.pathname === '/contact' ? 'active-item' : '';

        return (
            <Menu>
                {/* We NEVER want to use <a> inside our react router application */}
                {/* <a id='home' className='menu-item' href='/'>
                    Home
                </a> */}
                <Link to='/' className={`menu-item ${homeClass}`}>
                    Home
                </Link>
                <Link to='/about' className={`menu-item ${aboutClass}`}>
                    About
                </Link>
                <Link to='/projects' className={`menu-item ${projectsClass}`}>
                    Projects
                </Link>
                <Link to='/achievements' className={`menu-item ${achievementsClass}`}>
                    Achievemnets
                </Link>
                <Link to='/workexperience' className={`menu-item ${workExperienceClass}`}>
                    Work Experience
                </Link>
                <Link to='/skills' className={`menu-item ${skillsClass}`}>
                    Skills
                </Link>
                <Link to='/contact' className={`menu-item ${contactClass}`}>
                    Contact
                </Link>
            </Menu>
        );
    }
}

export default withRouter(NavBar);
