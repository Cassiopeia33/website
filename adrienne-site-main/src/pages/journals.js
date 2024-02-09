import React, { useState } from "react";
import { graphql } from "gatsby";
import "../../src/styles/reset.css";
import "../../src/styles/project.css";
import Layout from "../components/layout";
import Modal from "../components/modal";
import GridItem from "../components/griditem";

const Journals = ({ data }) => {
  const config = data;
  const navData = "journals";
  let [modalData, setModalData] = useState(null);
  return (
    <Layout navData={navData}>
      <div className="body-column">
        <div className="photo-grid wide">
          {config.allJournalsCsv.edges.map((edge) => {
            return (
              <GridItem edge={edge} setModalData={setModalData} type="wide" />
            );
          })}
        </div>
      </div>
      <Modal modalData={modalData} setModalData={setModalData} />
    </Layout>
  );
};

export const query = graphql`
  {
    allJournalsCsv {
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

export default Journals;
