import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Oh.studio.css';

import p21 from '../assets/images/p21.avif';
import logo from '../assets/images/haptic-logo2.png';
import p23 from '../assets/images/p23.avif';
import p24 from '../assets/images/p24.mp4';
import p25 from '../assets/images/p25.mp4';
import p26 from '../assets/images/p26.avif';
import p27 from '../assets/images/p27.avif';
import p28 from '../assets/images/p28.png';
import p29 from '../assets/images/p29.avif';
import p30 from '../assets/images/p30.avif';
import p31 from '../assets/images/p31.avif';
import p32 from '../assets/images/p32.avif';
import p33 from '../assets/images/p33.png';
import p34 from '../assets/images/p34.png';
import p35 from '../assets/images/p35.png';


const OhStudio = () => {
    const projects = [
        {
            logo: p23,
            media: p23,
            title: 'Spark',
            subtitle: 'Trading platform',
            type: 'image'
        },
        {
            logo: p24,
            media: p24,
            title: 'Norby',
            subtitle: 'Your AI data analyst',
            type: 'video'
        },
        {
            logo: p26,
            media: p26,
            title: 'Soul',
            subtitle: 'Bigcommerce theme',
            type: 'image'
        },
        {
            logo: p25,
            media: p25,
            title: 'Propeller',
            subtitle: 'Launching revolutionary ideas',
            type: 'video'
        },
        {
            logo: p27,
            media: p27,
            title: 'Aire',
            subtitle: 'A better way for everyday',
            type: 'image'
        },
        {
            logo: p28,
            media: p28,
            title: 'Three Notch Group',
            subtitle: 'Building the future',
            type: 'image'
        },
        {
            logo: p29,
            media: p29,
            title: 'Wealth Tracker',
            subtitle: 'Track your net worth',
            type: 'image'
        },
        {
            logo: p30,
            media: p30,
            title: 'Momentify',
            subtitle: 'Unforgettable live music experiences',
            type: 'video'
        },
        {
            logo: p31,
            media: p31,
            title: 'Correlated',
            subtitle: 'Tap into your customer data',
            type: 'video'
        },
        {
            logo: p32,
            media: p32,
            title: 'Remi',
            subtitle: 'Sustainable home improvement',
            type: 'image'
        },
        {
            logo: p33,
            media: p33,
            title: 'Tecton',
            subtitle: 'AI data engineering',
            type: 'image'
        },
        {
            logo: p34,
            media: p34,
            title: 'Playmind',
            subtitle: 'Your gaming AI companion',
            type: 'image'
        },
        {
            logo: p35,
            media: p35,
            title: 'Altitude',
            subtitle: 'Ecommerce concepts',
            type: 'image'
        }
    ];

    return (
        <main>
            <section className="intro">
                <h1 className="intro-heading">
                    A <a href="https://x.com">
                        <img src={p21} alt="Project" className="heading-media1" />
                    </a> designer working with startups globally.<br />
                    Currently steering the ship at <Link to="/haptic">
                        <img src={logo} alt="haptic" className="heading-media2" />Haptic.
                    </Link>
                </h1>

                <div className="page-logo">
                    <svg viewBox="-400 -400 800 800">
                        <path d="M-243.261,-243.229 L243.261,243.229
              M-243.23,243.26 L243.23,-243.261
              M-344.001,0.022 L344.001,-0.022
              M-0.022,-344 L0.022,344"
                        />
                    </svg>
                </div>
            </section>

            <section className="carousel">
                <ul className="carousel-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-card">
                            <div className="project-card-heading">
                                <img src={project.logo} alt="logo" />
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            {project.type === 'video' ? (
                                <video className="project-media" autoPlay loop muted playsInline>
                                    <source src={project.media} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={project.media} alt={`${project.title} Project`} className="project-media" />
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default OhStudio;