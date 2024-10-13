import React from "react";
import './About.css';
import UIDesign from '../assets/UI.png';
import WebDesign from '../assets/Web.png';
import GraphicDesign from '../assets/Graphic.png';
const About = () => {
    return (
        <section id = 'About'>
            <span className="AboutTitle">What I do</span>
            <span className="AboutDesc">I’m a budding web designer with a focus on UI/UX, passionate about creating clean, intuitive, and visually engaging websites. I'm eager to learn and bring fresh ideas to every project, blending creativity with user-centered design.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIUX" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Passionate UI/UX designer focused on transforming complex ideas into simple, user-friendly interfaces that delight and engage users.</p>
                    </div>
                </div>
                    <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <p>Versatile UI/UX designer and developer, skilled in creating seamless and engaging digital experiences that blend aesthetics with functionality.</p>
                    </div>
                </div>
                    <div className="skillBar">
                    <img src={GraphicDesign} alt="GraphicDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Graphic Designer</h2>
                        <p>Creative graphic designer passionate about transforming ideas into compelling visuals that communicate messages and inspire audiences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About