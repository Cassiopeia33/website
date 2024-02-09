import React, { useRef } from "react";

const Modal = ({ modalData, setModalData }) => {
  // Use modalRef so that when the modal is faded out, the image doesn't disappear
  const modalRef = useRef(null);
  if (modalData !== null) {
    modalRef.current = modalData;
  }
  const bestValue = modalData || modalRef.current;
  return (
    <div
      className={modalData !== null ? "modal-screen active" : "modal-screen"}
      onClick={() => {
        setModalData(null);
      }}
    >
      <div
        className="close-button"
        onClick={() => {
          setModalData(null);
        }}
      >
        X
      </div>
      <div className="modal-content">
        {bestValue && <img key={bestValue} src={"/art/" + bestValue} />}
      </div>
    </div>
  );
};

export default Modal;
