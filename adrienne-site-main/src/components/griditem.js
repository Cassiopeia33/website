import React, { useRef } from "react";
import LazyLoad from "react-lazyload";

const GridItem = ({ edge, setModalData }) => {
  return (
    <div
      className={"photo-grid-item"}
      onClick={() => {
        setModalData(edge.node.filename);
      }}
    >
      <LazyLoad height={300} once>
        <img src={"/art/" + edge.node.filename} />
      </LazyLoad>
      <div className="photo-grid-item-text">
        <h2>{edge.node.title}</h2>
        <p>{edge.node.date}</p>
      </div>
    </div>
  );
};

export default GridItem;
