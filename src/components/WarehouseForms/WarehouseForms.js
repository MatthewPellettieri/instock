import "./WarehouseForms.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";

function WarehouseForms(props) {
	let navigate = useNavigate();

	const clickHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	};

	const apiURL = "http://localhost:8080/api/warehouses/";

	// saving form data in state
	const [warehouseName, setWarehouseName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [contact, setContact] = useState("");
	const [position, setPosition] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const { id } = useParams();

	// watching for form data changes
	const changeHandler = (event) => {
		event.preventDefault();
		if (event.target.value !== "") {
			let textAreaDOM = document.getElementsByName(
				event.target.attributes.name.value
			);
			textAreaDOM[0].classList.remove("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(
				`${event.target.attributes.name.value}_error`
			);
			errorTextDOM[0].classList.remove("warehouseForms__form--errorText");
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// form validation
		let dataToSend = {};
		dataToSend.warehouse_name = event.target.warehouseName.value;
		dataToSend.address = event.target.streetAddress.value;
		dataToSend.city = event.target.city.value;
		dataToSend.country = event.target.country.value;
		dataToSend.contact_name = event.target.contactName.value;
		dataToSend.contact_position = event.target.position.value;
		dataToSend.contact_phone = event.target.phoneNumber.value;
		dataToSend.contact_email = event.target.email.value;

		if (event.target.warehouseName.value === "") {
			let textAreaDOM = document.getElementsByName("warehouseName");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`warehouseName_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.streetAddress.value === "") {
			let textAreaDOM = document.getElementsByName("streetAddress");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`streetAddress_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.city.value === "") {
			let textAreaDOM = document.getElementsByName("city");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`city_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.country.value === "") {
			let textAreaDOM = document.getElementsByName("country");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`country_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.contactName.value === "") {
			let textAreaDOM = document.getElementsByName("contactName");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`contactName_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.position.value === "") {
			let textAreaDOM = document.getElementsByName("position");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`position_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.phoneNumber.value === "") {
			let textAreaDOM = document.getElementsByName("phoneNumber");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`phoneNumber_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		if (event.target.email.value === "") {
			let textAreaDOM = document.getElementsByName("email");
			textAreaDOM[0].classList.add("warehouseForms__form--error");
			let errorTextDOM = document.getElementsByName(`email_error`);
			errorTextDOM[0].classList.add("warehouseForms__form--errorText");
		}

		// sends data to different endpoint . depending on if the URL includes add or edit
		if (window.location.href.includes("add")) {
			axios
				.post(apiURL, dataToSend)
				.then((res) => {
					alert(`${res.data[0].warehouse_name} added as a new Warehouse`);
					event.target.reset();
					navigate(-1);
				})
				.catch((err) => {
					alert(err);
				});
		} else if (window.location.href.includes("edit")) {
			axios
				.patch(`${apiURL}${id}`, dataToSend)
				.then((res) => {
					alert(`${res.data.warehouse_name}  warehouse updated!`);
					navigate(-1);
				})
				.catch((err) => {
					alert(err);
				});
		}
	};

	// populating default data for edit
	useEffect(() => {
		if (id) {
			axios
				.get(`${apiURL}${id}`)
				.then((res) => {
					setWarehouseName(res.data[0].warehouse_name);
					setAddress(res.data[0].address);
					setCity(res.data[0].city);
					setCountry(res.data[0].country);
					setContact(res.data[0].contact_name);
					setPosition(res.data[0].contact_position);
					setPhone(res.data[0].contact_phone);
					setEmail(res.data[0].contact_email);
				})
				.catch((err) => {
					alert(err);
				});
		}
	}, [id]);

	return (
		<div className="warehouseForms">
			<div className="warehouseForms__header--container">
				<img
					className="warehouseForms__header--icon"
					src={backArrow}
					alt="back-arrow"
					onClick={clickHandler}
				/>
				<p className="warehouseForms__header--title">{props.heading}</p>
			</div>
			<form onSubmit={submitHandler}>
				<div className="warehouseForms__container">
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Warehouse Details</h2>

						<h3 className="warehouseForms__form--label">Warehouse Name</h3>

						<textarea
							onChange={changeHandler}
							name="warehouseName"
							placeholder="Warehouse Name"
							className="warehouseForms__form--input"
							defaultValue={warehouseName}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="warehouseName_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">Street Address</h3>
						<textarea
							onChange={changeHandler}
							name="streetAddress"
							placeholder="Street Address"
							className="warehouseForms__form--input"
							defaultValue={address}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="streetAddress_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">City</h3>
						<textarea
							onChange={changeHandler}
							name="city"
							placeholder="City"
							className="warehouseForms__form--input"
							defaultValue={city}></textarea>
						<p className="warehouseForms__form--noerrorText" name="city_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">Country</h3>
						<textarea
							onChange={changeHandler}
							name="country"
							placeholder="Country"
							className="warehouseForms__form--input"
							defaultValue={country}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="country_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>
					</div>
					<hr className="warehouseForms__divider" />
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Contact Details</h2>

						<h3 className="warehouseForms__form--label">Contact Name</h3>

						<textarea
							onChange={changeHandler}
							name="contactName"
							placeholder="Contact Name"
							className="warehouseForms__form--input"
							defaultValue={contact}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="contactName_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">Position</h3>
						<textarea
							onChange={changeHandler}
							name="position"
							placeholder="Position"
							className="warehouseForms__form--input"
							defaultValue={position}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="position_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">Phone Number</h3>
						<textarea
							onChange={changeHandler}
							name="phoneNumber"
							placeholder="Phone Number"
							className="warehouseForms__form--input"
							defaultValue={phone}></textarea>
						<p
							className="warehouseForms__form--noerrorText"
							name="phoneNumber_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>

						<h3 className="warehouseForms__form--label">Email</h3>
						<textarea
							onChange={changeHandler}
							name="email"
							placeholder="Email"
							className="warehouseForms__form--input"
							defaultValue={email}></textarea>
						<p className="warehouseForms__form--noerrorText" name="email_error">
							<img src={errorIcon} alt="errorIcon" />
							This feild is required
						</p>
					</div>
				</div>
				<div className="warehouseForms__buttons">
					<button
						className="warehouseForms__buttons--button warehouseForms__buttons--cancel"
						onClick={clickHandler}>
						Cancel
					</button>
					<button
						className="warehouseForms__buttons--button warehouseForms__buttons--addWarehouse"
						type="submit">
						{props.buttonText}
					</button>
				</div>
			</form>
		</div>
	);
}

export default WarehouseForms;
