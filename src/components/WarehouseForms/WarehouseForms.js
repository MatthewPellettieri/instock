import "./WarehouseForms.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseForms(props) {
	return (
		<div className="warehouseForms">
			<div className="warehouse__header--container">
				<Link to="/" className="warehouse__header--link">
					<img
						className="warehouse__header--icon"
						src={backArrow}
						alt="back-arrow"
					/>
				</Link>
				<p className="warehouse__header--title">{props.heading}</p>
			</div>
			<div className="warehouseForms__container">
				<form className="warehouseForms__form">
					<h2 className="warehouseForms__form--title">Warehouse Details</h2>

					<h3 className="warehouseForms__form--label">Warehouse Name</h3>
					<textarea  name="warehouseName" placeholder="Warehouse Name" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">Street Address</h3>
					<textarea  name="streetAddress" placeholder="Street Address" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">City</h3>
					<textarea  name="city" placeholder="City" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">Country</h3>
					<textarea  name="country" placeholder="Country" className="warehouseForms__form--input"></textarea>
				</form>
				<hr className="warehouseForms__divider"/>
				<form className="warehouseForms__form">
					<h2 className="warehouseForms__form--title">Contact Details</h2>

					<h3 className="warehouseForms__form--label">Contact Name</h3>
					<textarea  name="contactName" placeholder="Contact Name" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">Position</h3>
					<textarea  name="position" placeholder="Position" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">Phone Number</h3>
					<textarea  name="phoneNumber" placeholder="Phone Number" className="warehouseForms__form--input"></textarea>

					<h3 className="warehouseForms__form--label">Email</h3>
					<textarea  name="email" placeholder="Email" className="warehouseForms__form--input"></textarea>
				</form>
			</div>
			<div className="warehouseForms__buttons">
				<button className="warehouseForms__buttons--button warehouseForms__buttons--cancel">Cancel</button>
				<button className="warehouseForms__buttons--button warehouseForms__buttons--addWarehouse">{props.buttonText}</button>
			</div>
		</div>
	);
}

export default WarehouseForms;
