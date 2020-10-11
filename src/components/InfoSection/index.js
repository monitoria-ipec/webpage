import React from "react";
// import { Link } from "gatsby";
import "./styles.scss";

const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="info-about-section">
        <div className="info-about-panel">
          <h1 className="info-about-panel--header">Sobre o site</h1>
          <div className="info-about-panel--text">
            Fizemos esse site com o objetivo de facilitar a comunicação entre
            monitores e estudantes da cadeira de introdução a programação para
            engenharia da computação. Aqui, você pode encontrar as redes socias
            de todos os monitores, além de arquivos, como slides e provas
            antigas, e links úteis que os ajudarão nos estudos da cadeira.
          </div>
        </div>
      </div>
      <div className="info-about-video-section">
        <h2 className="info-about-video-section--header">Inspire-se</h2>
        <div className="info-about-video-section">
          <iframe
            src="https://www.youtube.com/embed/nKIu9yen5nc"
            frameBorder="0"
            width="500"
            height="300"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
