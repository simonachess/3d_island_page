import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Simona</span>👋
            <br />
            Frontend developer
            <br />
            <span className='text-sm italic'>-- explore my island and find out more about me! --</span>
        </h1>
    ),
    2: (
        <InfoBox text="Worked with many companies and picked up many sklills along the way"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox text="Improving my skills and learning new technologies every day. Check out my projects!"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox text="Need a project done? I am available for hire! Let's work together!"
            link="/contact"
            btnText="Let's talk!"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {

    return (
        renderContent[currentStage] || null
    )
}

export default HomeInfo