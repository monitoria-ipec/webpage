import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "assets/stylesheets/global.scss";
import "./styles.scss";

import Header from "../../components/Header";

// Esses links virão do arquivo md no futuro
const headerLinks = {
  notas:
    "https://docs.google.com/spreadsheets/d/12zaq3LsBcZh9qMyFbs6gdU2_Y9qPn53Csj3eYwTA6fE/",
  cronogramas:
    "https://sites.google.com/a/cin.ufpe.br/if669ec/cronograma-turma---alexandre-mota",
  classroom: "https://classroom.google.com/u/0/c/MjA3NjMwOTkyNzFa",
};

const Layout = ({ children, pageName, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="layout-container">
        <Header links={headerLinks} />
        <div className="layout-content">{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
