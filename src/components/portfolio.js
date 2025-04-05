import React from "react";
import './portfolio.css';
import portfolio3 from '../assets/portfolio-3.png';
import portfolio4 from '../assets/portfolio-4.png';
import portfolio5 from '../assets/portfolio-5.png';
import portfolio6 from '../assets/portfolio-6.png';
import client_server from '../assets/client-server.png';
import Placements from '../assets/kaggle.png'

const portfolio = () => {
    return (
        <section id = 'portfolio'>
           <h2 className="worksTitle">My Portfolio</h2>
           <span className="worksDesc">A collection of my web design projects, where I focus on crafting user-friendly interfaces and enhancing the overall digital experience. Each project reflects my journey in blending creativity with functionality to deliver clean, intuitive, and engaging designs.</span>
            <div className="worksImgs">
                <div className="portfolioItem">
                    <img src={client_server} alt="Client Server Chat Application" className="worksImg" />
                    <p className="portfolioDescription">Chat Application</p>
                    <a href="https://github.com/Laksh921/Chat-Application.git" target="_blank" rel="noopener noreferrer" className="exploreOverlay">
                        Explore this section
                    </a>
                </div>
                <div className="portfolioItem">
                    <img src={Placements} alt="Placement_Prediction_App" className="worksImg" />
                    <p className="portfolioDescription">Student Placement Prediction Web App</p>
                    <a href="https://placement-prediction-app-g2zf.onrender.com" target="_blank" rel="noopener noreferrer">
                        Deployed Application
                    </a>
                    <a href="https://github.com/Laksh921/Placement_Prediction_App" target="_blank" rel="noopener noreferrer" className="exploreOverlay">
                        Explore this section
                    </a>
                </div>
                <img src= {portfolio3} alt="portfolio3" className="worksImg" />
                <img src= {portfolio4} alt="portfolio4" className="worksImg" />
                <img src= {portfolio5} alt="portfolio5" className="worksImg" />
                <img src= {portfolio6} alt="portfolio6" className="worksImg" />
            </div>
        </section>
    )
}
export default portfolio;
