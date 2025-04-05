import React from "react";
import './intro.css';
import bg from '../assets/Lakshyaaa.png';
import binning from '../assets/bag.png';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Lakshya,</span> <br/> Website Designer</span>
                <p className="introPara"> With a strong foundation in engineering principles and desire for continuous learning, <br />I am well-positioned to make meaningful contributions to the field and <br />create a positive impact on society.</p>
                <div class="button-container">
                <a><button className="btn"><img src={binning} alt="Hire Me" className="binning"/>Hire Me</button></a>
                <a href="https://drive.google.com/file/d/17jI0fxfWdwvs0NA6jSi8VBuSO_nmm2pB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="Resume">My Resume</button></a>
                </div>
            </div>
            <img src={bg} alt="MyImage" className="bg" />
        </section>
    )
}
export default Intro