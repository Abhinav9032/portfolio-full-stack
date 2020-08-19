import React , {useState} from 'react'

import {Pie} from 'react-chartjs-2';

import cssLogo from "./../assets/skillLogos/css3-brands.svg";
import mySql from "./../assets/skillLogos/database-solid.svg";
import docker from "./../assets/skillLogos/docker-brands.svg";
import git from "./../assets/skillLogos/github-brands.svg";
import html from "./../assets/skillLogos/html5-brands.svg";
import java from "./../assets/skillLogos/java-brands.svg";
import jenkins from "./../assets/skillLogos/jenkins-brands.svg";
import javascript from "./../assets/skillLogos/js-brands.svg";
import reactJs from "./../assets/skillLogos/react-brands.svg";
import springboot from "./../assets/sb-02.svg";
import springCloud from "./../assets/spring-cloud.svg";
import aws from './../assets/skillLogos/aws-brands.svg'


const logoList = [java,springboot,springCloud,mySql,reactJs,html,cssLogo,javascript,git,docker,jenkins,aws];
const colorArr = [['#014921'],['#FF6384'],['#2373AF']];
const skillDetails = [
    {
        chartData : {
            datasets: [{
                data:[90,10],
                backgroundColor:colorArr[0],
            }]
        },
        skill : 'Java',
        id:'0',
        text: '5+ years of experience in maintaining, developing, testing and debugging Java/J2EE applications.'
    },
    {
        chartData : {
            datasets: [{
                data:[70,30],
                backgroundColor:colorArr[1],
            }]
        },
        skill : 'SpringBoot',
        id:'1',
        text: ' Scalable and secured standalone Spring boot microservices which can communicate via Messaging systems or Rest calls.'
    },
    {
        chartData : {
            datasets: [{
                data:[75,25],
                backgroundColor:colorArr[2],
            }]
        },
        skill : 'Spring Cloud',
        id:'2',
        text: ' Used API Gateways, Discovery service, Fault tolerance, Cloud configuration, etc. extensively in many applications.'
    },
    {
        chartData : {
            datasets: [{
                data:[60,40],
                backgroundColor:colorArr[0],
            }]
        },
        skill : 'My Sql',
        id:'3',
        text: 'Confident in writing common organisational level Queries and operations. Neither a pro nor a Begginner.'
    },
    {
        chartData : {
            datasets: [{
                data:[70,30],
                backgroundColor:colorArr[1],
            }]
        },
        skill : 'React JS',
        id:'4',
        text: 'Working since 2.5 years with this exciting Library and React is used to make the current page as well.'
    },
    {
        chartData : {
            datasets: [{
                data:[80,20],
                backgroundColor:colorArr[2],
            }]
        },
        skill : 'HTML',
        id:'5',
        text: 'Built/Enhanced and added features to several websites built using html.'
    },
    {
        chartData : {
            datasets: [{
                data:[60,40],
                backgroundColor:colorArr[0],
            }]
        },
        skill : 'CSS',
        id:'6',
        text: 'Good Hands On experience with adding CSS for a marvelous User Experience, used Bootstrap in some projects as well.'
    },
    {
        chartData : {
            datasets: [{
                data:[90,10],
                backgroundColor:colorArr[1],
            }]
        },
        skill : 'Java Script',
        id:'7',
        text: 'Used ES6 features as well as Vanilla JS features a lot. The magical synchronous language in which I am very comfortable.'
    },
    {
        chartData : {
            datasets: [{
                data:[65,35],
                backgroundColor:colorArr[2],
            }]
        },
        skill : 'Git',
        id:'8',
        text: 'Used 4 Source control systems since last 5 years , this is the most advanced and elastic VCS I came accross.'
    }, {
        chartData : {
            datasets: [{
                data:[72,28],
                backgroundColor:colorArr[0],
            }]
        },
        skill : 'Docker',
        id:'9',
        text: 'Deploying containerised apps using Docker since more than a year, might have released 100+ apps but not less'
    },
    {
        chartData : {
            datasets: [{
                data:[40,60],
                backgroundColor:colorArr[1],
            }]
        },
        skill : 'Jenkins',
        id:'10',
        text: 'Familiar with the dashboard to configure Jobs , adding plugins , configuring Hooks and other basic CI/CD operations.'
    },
    {
        chartData : {
            datasets: [{
                data:[30,70],
                backgroundColor:colorArr[2],
            }]
        },
        skill : 'AWS',
        id:'11',
        text: 'Basic knowledge, recently moved to this platform and found it a one stop solution for many needs. Targeting Certification ASAP'
    },
    
]

var clickedItemsList = [0,0,0,0,0,0,0,0,0,0,0,0];

const SkillsLogo = () => {
    const [show, setShow] = useState(0);
    const [color, setColor] = useState(skillDetails[0].chartData.datasets[0].backgroundColor[0]);
    var currentIndex = 0;
    const handleLogoClick = (index) => event => {
        setShow(index);
        console.log(show);
        currentIndex = index;
        event.currentTarget.style.boxShadow="0 10px 50px 4px "+skillDetails[index].chartData.datasets[0].backgroundColor[0];
        event.currentTarget.style.background="#fff";
        event.currentTarget.style.border= "1px groove "+skillDetails[index].chartData.datasets[0].backgroundColor[0];
        console.log('show' , skillDetails[currentIndex].skill);
        clickedItemsList[index] = 1;
        console.log(clickedItemsList);
        setColor(skillDetails[index].chartData.datasets[0].backgroundColor[0]);
        console.log(color);
    }

    const mouseOver = (index) => event => {
        event.currentTarget.style.background="#fff";
        event.currentTarget.style.border="1px groove "+skillDetails[index].chartData.datasets[0].backgroundColor[0];
    }

    const mouseOut = (index) => event => {
        if(clickedItemsList[index] !== 1){
            event.currentTarget.style.background="rgba(200,200,200,0.7)";
        }
    }

    
    return(
        <div className="skill-main-container">
            <h3 className="skill-header" id="skill-section">Skills</h3>
            <p className="skill-header" id="skill-header-text">CLICK TO KNOW MORE..</p>
            <div className="skills-logo-desc-container">
                
                <div className="skills-logo">
                {logoList.map( (logo , index) => <img src={logo}  alt="Logo" onMouseOver={mouseOver(index)} onMouseOut={mouseOut(index)} onClick={handleLogoClick(index)}/> )}
                </div>
                <div className="skills-desc">
                    <div className="skills-desc-top">
                        <div className="skill-name">
                            <h3 style={{color:color}}> {skillDetails[show].skill}</h3>
                        </div>
                        <div className="chart-display">
                            <Pie data={skillDetails[show].chartData}/>
                        </div>

                    </div>
                        
                        <div className="skill-text">
                            <h4 style={{color:color}}>{skillDetails[show].text}</h4>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default SkillsLogo;