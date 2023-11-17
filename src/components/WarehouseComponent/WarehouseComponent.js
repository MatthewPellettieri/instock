import "./WarehouseComponent.scss";
import { useState } from "react";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { toFormData } from "axios";
import DeleteWarehouseModal from "../../components/DeleteModal/DeleteWarehouseModal";

export default function WarehouseComponent({
  warehouseName,
  contactName,
  contactEmail,
  contactPhone,
  address,
  city,
  country,
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active--modal')
  } else {
    document.body.classList.remove('active--modal')
  }
  return (
    <>
      <section className="warehouseCard">
        {modal === true && <DeleteWarehouseModal toggleModal={toggleModal}/>}
        <div className="warehouseCard__flex-container">
          <div className="warehouseCard__name-box">
            <div className="warehouseCard__name">
              <p className="warehouseCard__name-text">warehouse</p>
              <div className="warehouseCard__name-link">
                <p className="warehouseCard__location">{warehouseName}</p>
                <img
                  className="arrow"
                  src={arrow}
                  alt={"blue arrow link"}
                ></img>
              </div>
            </div>
            <div className="warehouseCard__address">
              <p className="warehouseCard__address-text">address</p>
              <p className="warehouseCard__postal">{`${address}, ${city}, ${country}`}</p>
            </div>
          </div>

          <div className="warehouseCard__contact-box">
            <div className="warehouseCard__contact">
              <p className="warehouseCard__contact-text">contact name</p>
              <p className="warehouseCard__contact-name">{contactName}</p>
            </div>

            <div className="warehouseCard__contact-info">
              <p className="warehouseCard__contact-title">
                Contact Information
              </p>
              <p className="warehouseCard__contact-number">{contactPhone}</p>
              <p className="warehouseCard__contact-email">{contactEmail}</p>
            </div>
          </div>
        </div>
        <div className="warehouseCard__icons">
          <button onClick={toggleModal} className="delete--button">
            <img src={deleteIcon} alt={"delete-icon"} />
          </button>
          <img src={editIcon} alt={"edit-icon"} />
        </div>
      </section>
    </>
  );
}


