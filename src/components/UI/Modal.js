import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header>
        <h2>{props.title}</h2>
      </header>
      <p>{props.errorMessage}</p>
      <footer>
        <button className="button" type="button" onClick={props.onConfirm}>
          Okay
        </button>
      </footer>
    </div>
  );
};

const Modal = (props) => {
  const onOkay = () => {
    props.onConfirm();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onOkay} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          errorMessage={props.errorMessage}
          onConfirm={onOkay}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
