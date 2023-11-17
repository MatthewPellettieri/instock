import './DeleteWarehouseModal.scss';
import exitIcon from "../../assets/Icons/close-24px.svg";

function DeleteWarehouseModal(props) {
    return (
      <>
        <div className="modal">
          <div className="overlay">
            <div className="modal--content">
              <div className="img--container">
                <button onClick={props.toggleModal} className="exit--button">
                  <img src={exitIcon} alt="" className="exit" />
                </button>
              </div>
              <h1 className="modal__header">Delete Washington warehouse?</h1>
              <p className="modal__text">
                Please confirm that you'd like to delete the Washington from the
                list of warehouses. You won't be able to undo this action.
              </p>
              <div className="modal__button__container">
              <button onClick={props.toggleModal} className="close--modal">
                Cancel
              </button>
              <button className="confirm--delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default DeleteWarehouseModal;