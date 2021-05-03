import "./Modal.css";

const Modal = (props) => {
  const onConfirm = () => {
    props.onConfirm();
  };
  return (
    <div>
      <div className="backdrop" />
      <div className="modal">
        <header>
          <h2>{props.title}</h2>
        </header>
        <p>{props.errorMessage}</p>
        <footer>
          <button className="button" type="button" onClick={onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
