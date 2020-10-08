import React from "react";
// import { Link } from "gatsby";
import "./styles.scss";
import { MdClass } from "react-icons/md";
const InfoSection = ({ usefulLinks }) => {
  return (
    <div className="info-container">
      <div className="info-about-section">
        {/* mudar isso aqui depois para ser um dos mds */}
        <h2 className="info-about-section--header">Sobre o site</h2>
        <p className="info-about-section--text">
          Fizemos esse site com o objetivo de facilitar a comunicação entre
          monitores e estudantes da cadeira de introdução a programação para
          engenharia da computação. Aqui, você pode encontrar as redes socias de
          todos os monitores, além de arquivos, como slides e provas antigas, e
          links úteis que os ajudarão nos estudos da cadeira.
        </p>
        <div>
          <iframe
            width="500"
            height="300"
            class="video"
            src="https://www.youtube.com/embed/nKIu9yen5nc"
            frameborder="0"
            title="Video"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="useful-links-section">
        <h2 className="info-about-section--header">Links Úteis</h2>

        <div className="icon">
          <MdClass />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
