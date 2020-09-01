import React from 'react'
import PortfolioNavbar from './PortfolioNavbar'
import ImageSlider from './ImageSlider';
import FullstackDetailJumbotron from './FullstackDetailJumbotron';
import Experience from './Experience';
import Feedback from './Feedback';
import GetResume from './GetResume';
import Headings from './Headings';
import SkillsLogo from './SkillsLogo';
import ExperienceCards from './ExperienceCards';


const PortfolioLanding = () => {
    return(
        <div>
            <PortfolioNavbar/>
            <ImageSlider />
            <FullstackDetailJumbotron/>
            <ExperienceCards/>
            <SkillsLogo/>
            <Headings id="about-section" text="About"/>
            <Feedback/>
        </div>
    );
};
export default PortfolioLanding;