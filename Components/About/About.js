import React from 'react';
import portrait from '../../assets/images/self2.jpg';
import './About.css';
import Skills from '../Skills/Skills';
import resume from '../../assets/documents/20211213_Lang_Resume_Coding.pdf';

export default function About() {
    return (
        <div id="about">   
            <div className="aboutAndSkills">    
            <div className='about'>
            <div class="aboutPortrait">
                    <img src={portrait} alt="Patrick Lang" />
                </div>   
                <div className='aboutInfo'>
                    <h2>A little about me... </h2>
                    <p>I am a self-taught web developer working to become a professional programmer. I have trained myself with help from CodeCademy's Full Stack development career path, books like Marijn Haverbeke's <i>Eloquent JavaScript</i>, and other supplementary materials.</p>
                    <p>Many of my personal projects are built around MongoDB, Express, React-Redux, and NodeJS, but when it comes to learning new technologies, I am always up for a challenge. For example, for this portfolio I used Three.js to enable a three-dimensional menu, and currently I am working on a project that uses PostgreSQL rather than MongoDB on the backend.</p>
                    <p>I enjoy coding both for the frontend and the backend, and have just begun to apply to development jobs. If you need a new junior developer, get in touch!</p>
                    <a href={resume} download><button>Check out my Resume!</button></a>
                </div>
                  
                 
            </div>
            <Skills />
            </div>  
        </div>
    )
}
