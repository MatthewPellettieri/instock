import "./WarehouseForms.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseForms(props) {
	let navigate = useNavigate();

	const apiURL = "http://localhost:8080/api/warehouses/"

	const [warehouseName, setWarehouseName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [contact, setContact] = useState("");
	const [position, setPosition] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const clickHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	}

	const {id} = useParams();

	const submitHandler = (event) => {
		event.preventDefault();

		let dataToSend = {};
		dataToSend.warehouse_name = event.target.warehouseName.value;
		dataToSend.address = event.target.streetAddress.value;
		dataToSend.city = event.target.city.value;
		dataToSend.country = event.target.country.value;
		dataToSend.contact_name = event.target.contactName.value;
		dataToSend.contact_position = event.target.position.value;
		dataToSend.contact_phone = event.target.phoneNumber.value;
		dataToSend.contact_email = event.target.email.value;
		
		if (window.location.href.includes("addWarehouse")) {
			axios
			.post(apiURL , dataToSend)
			.then((res) =>{
				alert(`${res.data[0].warehouse_name} added as a new Warehouse`);
				event.target.reset();
			})
			.catch((err) => {
				alert(err)
			});
		}

		else if (window.location.href.includes("editWarehouse")) {
			axios
			.patch(`${apiURL}${id}`, dataToSend)
			.then((res) =>{
				alert(`${res.data.warehouse_name}  warehouse updated!`);
			})
			.catch((err) => {
				alert(err)
			})
		}
	}

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
				<Link to="/" className="warehouseForms__header--link">
					<img
						className="warehouseForms__header--icon"
						src={backArrow}
						alt="back-arrow"
					/>
				</Link>
				<p className="warehouseForms__header--title">{props.heading}</p>
			</div>
			<form onSubmit={submitHandler}>
				<div className="warehouseForms__container">
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Warehouse Details</h2>

						<h3 className="warehouseForms__form--label">Warehouse Name</h3>
						<textarea  name="warehouseName" placeholder="Warehouse Name" className="warehouseForms__form--input" defaultValue={warehouseName}></textarea>

						<h3 className="warehouseForms__form--label">Street Address</h3>
						<textarea  name="streetAddress" placeholder="Street Address" className="warehouseForms__form--input" defaultValue={address}></textarea>

						<h3 className="warehouseForms__form--label">City</h3>
						<textarea  name="city" placeholder="City" className="warehouseForms__form--input" defaultValue={city}></textarea>

						<h3 className="warehouseForms__form--label">Country</h3>
						<textarea  name="country" placeholder="Country" className="warehouseForms__form--input" defaultValue={country}></textarea>
					</div>
					<hr className="warehouseForms__divider"/>
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Contact Details</h2>

						<h3 className="warehouseForms__form--label">Contact Name</h3>
						<textarea  name="contactName" placeholder="Contact Name" className="warehouseForms__form--input" defaultValue={contact}></textarea>

						<h3 className="warehouseForms__form--label">Position</h3>
						<textarea  name="position" placeholder="Position" className="warehouseForms__form--input" defaultValue={position}></textarea>

						<h3 className="warehouseForms__form--label">Phone Number</h3>
						<textarea  name="phoneNumber" placeholder="Phone Number" className="warehouseForms__form--input" defaultValue={phone}></textarea>

						<h3 className="warehouseForms__form--label">Email</h3>
						<textarea  name="email" placeholder="Email" className="warehouseForms__form--input" defaultValue={email}></textarea>
					</div>
				</div>
				<div className="warehouseForms__buttons">
					<button className="warehouseForms__buttons--button warehouseForms__buttons--cancel" onClick={clickHandler}>Cancel</button>
					<button className="warehouseForms__buttons--button warehouseForms__buttons--addWarehouse" type="submit">{props.buttonText}</button>
				</div>
			</form>
		</div>
	);
}

export default WarehouseForms;
