import React from "react";
import Layout from "../components/Layout";
import InfoSection from "../components/InfoSection";
import UsefulLinksSection from '../components/UsefulLinksSection';
const usefulLinks = [
  {
    name: "Site Da Cadeira",
    icon: "MdClass",
    link: "https://sites.google.com/a/cin.ufpe.br/if669ec/",
  },
];
const IndexPage = () => {
  return (
    <Layout title={"Home"}>
      <InfoSection usefulLinks={usefulLinks}></InfoSection>
      <UsefulLinksSection />
    </Layout>
  );
};

export default IndexPage;
