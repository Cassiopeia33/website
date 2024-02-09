import React, { useState } from "react";
import { graphql } from "gatsby";
import "../../src/styles/reset.css";
import "../../src/styles/project.css";
import Layout from "../components/layout";
import Modal from "../components/modal";
import GridItem from "../components/griditem";

const Retouching = ({ data }) => {
  const config = data;
  const navData = "retouching";
  let [modalData, setModalData] = useState(null);
  return (
    <Layout navData={navData}>
      <div className="body-column">
        <div className="photo-grid">
          {config.allRetouchingCsv.edges.map((edge) => {
            return <GridItem edge={edge} setModalData={setModalData} />;
          })}
        </div>
      </div>
      <Modal modalData={modalData} setModalData={setModalData} />
    </Layout>
  );
};

export const query = graphql`
  {
    allRetouchingCsv {
      edges {
        node {
          filename
          title
          date
        }
      }
    }
  }
`;

export default Retouching;
