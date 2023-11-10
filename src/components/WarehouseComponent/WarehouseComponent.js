import "./WarehouseComponent.scss";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
export default function warehouseComponent({
  warehouseName,
  contactName,
  contactEmail,
  contactPhone,
  address,
  city,
  country,
}) {
  console.log(contactPhone);
  return (
    <>
      <section className="warehouse__info">
        <div className="warehouse__name-box">
          <div className="warehouse__name">
            <p className="warehouse__name-text">warehouse</p>
            <div className="warehouse__name-link">
              <p className="warehouse__location">{warehouseName}</p>
              <img className="arrow" src={arrow} alt={"blue arrow link"}></img>
            </div>

            <div className="warehouse__address">
              <p className="warehouse__address-text">address</p>
              <p className="warehouse__location">{`${address}, ${city}, ${country}`}</p>
            </div>
          </div>
        </div>

        <div className="warehouse__contact-box">
          <div className="warehouse__contact">
            <p className="warehouse__contact-text">contact name</p>
            <p className="warehouse__contact-name">{contactName}</p>
          </div>

          <div className="warehouse__contact-info">
            <p className="warehouse__contact-info-text">Contact Information</p>
            <p className="warehouse__contact-number">{contactPhone}</p>
            <p className="warehouse__contact-email">{contactEmail}</p>
          </div>
        </div>
      </section>
      <div className="warehouse__icons">
        <img src={deleteIcon} alt={"delete-icon"} />
        <img src={editIcon} alt={"edit-icon"} />
      </div>
    </>
  );
}
