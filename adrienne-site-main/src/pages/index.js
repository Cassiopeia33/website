import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "../../src/styles/reset.css";
import "../../src/styles/project.css";
import Layout from "../components/layout";
import Modal from "../components/modal";
import GridItem from "../components/griditem";

const IndexPage = ({ data }) => {
  const config = data;
  let [modalData, setModalData] = useState(null);
  return (
    <Layout>
      <div className="body-column">
        <div className="photo-grid">
          {config.allMainCsv.edges.map((edge) => {
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
    allMainCsv {
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

export default IndexPage;
