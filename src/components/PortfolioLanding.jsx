import React from 'react'
import PortfolioNavbar from './PortfolioNavbar'
import ImageSlider from './ImageSlider';
import FullstackDetailJumbotron from './FullstackDetailJumbotron';
import Experience from './Experience';
import Skills from './Skills';
import Feedback from './Feedback';
import GetResume from './GetResume';
import Headings from './Headings';
import SkillsLogo from './SkillsLogo';


const PortfolioLanding = () => {
    return(
        <div>
            <PortfolioNavbar/>
            <ImageSlider />
            <FullstackDetailJumbotron/>
            <Headings id="experience-section" text="Experience"/>
            <Experience/>
            <SkillsLogo/>
            <Headings id="about-section" text="About"/>
            <div className="footer-section">
            <GetResume/>
            <Feedback/>
            
            </div>
        </div>
    );
};
export default PortfolioLanding;