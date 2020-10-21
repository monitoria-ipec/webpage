import React from "react";
import "./styles.scss";

const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="info-about-section">
        <div className="info-about-title">
          <h1>Sobre o site</h1>
        </div>
        <div className="info-about-text">
          <p>
            Fizemos esse site com o objetivo de facilitar a comunicação entre
            monitores e estudantes da cadeira de introdução a programação para
            engenharia da computação. Aqui, você pode encontrar as redes socias
            de todos os monitores, além de arquivos, como slides e provas
            antigas, e links úteis que os ajudarão nos estudos da cadeira.
          </p>
        </div>
      </div>
      <div className="info-video-section">
        <div className='info-video-title'>
          <h1>Inspire-se</h1>
        </div>
        <div className="info-video-youtube">
          <iframe
              src="https://www.youtube.com/embed/nKIu9yen5nc"
              frameBorder="0"
              width="500"
              height="300"
              title="Video"
              allowFullScreen
            />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
