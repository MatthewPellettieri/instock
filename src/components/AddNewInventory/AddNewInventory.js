import backButton from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import "./AddNewInventory.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
	item_name: "",
	description: "",
	category: "",
	quantity: "",
	status: "",
	warehouse_id: "",
};

function AddInventory() {
	const [quantity, setQuantity] = useState(false);
	const [warehouseData, setWarehouseData] = useState([]);

	const invCategory = [
		{ id: 1, category: "Electronics" },
		{ id: 2, category: "Gear" },
		{ id: 3, category: "Apparel" },
		{ id: 4, category: "Accessories" },
		{ id: 5, category: "Health" },
	];

	const wareHouseApi = "http://localhost:8080/api/warehouses";
	const inventoryApi = "http://localhost:8080/api/inventories";

	useEffect(() => {
		axios.get(`${wareHouseApi}`).then((response) => {
			let wareHouseData = response.data;
			setWarehouseData(wareHouseData);
		});
	}, []);

	const inStockHandler = () => {
		setQuantity(true);
	};

	const outOfStockHandler = () => {
		setQuantity(false);
	};

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});

		// if (event.target.attributes[0].value === "status") {
		// 	return;
		// } else if (event.target.value !== "") {
		// 	let textAreaDOM = document.getElementsByName(
		// 		event.target.attributes.name.value
		// 	);
		// 	let sub = 0;
		// 	if (textAreaDOM.length > 1) {
		// 		sub = 1;
		// 	}
		// 	textAreaDOM[sub].classList.remove("AddInventory--error");
		// 	let errorTextDOM = document.getElementsByName(
		// 		`${event.target.attributes.name.value}_error`
		// 	);
		// 	errorTextDOM[0].classList.remove("AddInventory--errorText");
		// }
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (values.quantity === "") {
			values.quantity = "0";
		}
		if (values.quantity === "0") {
			values.status = "Out of Stock";
		}

		if (values.item_name === "") {
			let textAreaDOM = document.getElementsByName("item_name");
			textAreaDOM[0].classList.add("AddInventory--error");
			let errorTextDOM = document.getElementsByName(`item_name_error`);
			errorTextDOM[0].classList.add("AddInventory--errorText");
		}

		if (values.description === "") {
			let textAreaDOM = document.getElementsByName("description");
			textAreaDOM[1].classList.add("AddInventory--error");
			let errorTextDOM = document.getElementsByName(`description_error`);
			errorTextDOM[0].classList.add("AddInventory--errorText");
		}

		if (values.category === "") {
			let textAreaDOM = document.getElementsByName("category");
			textAreaDOM[0].classList.add("AddInventory--error");
			let errorTextDOM = document.getElementsByName(`category_error`);
			errorTextDOM[0].classList.add("AddInventory--errorText");
		}

		if (values.warehouse_id === "") {
			let textAreaDOM = document.getElementsByName("warehouse_id");
			textAreaDOM[0].classList.add("AddInventory--error");
			let errorTextDOM = document.getElementsByName(`warehouse_id_error`);
			errorTextDOM[0].classList.add("AddInventory--errorText");
		}

		axios
			.post(inventoryApi, values)
			.then((response) => {
				alert("Item added!");
				navigate(-1);
			})
			.catch(() => {
				alert("failed to add item");
			});
	};

	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(-1);
	};

	return (
		<section className="AddInventory">
			<div className="AddInventory__header">
				<img
					className="AddInventory__header-back-button"
					src={backButton}
					alt="button to back"
					onClick={clickHandler}></img>
				<h1 className="AddInventory__title">Add Inventory Item</h1>
			</div>

			<section className="AddInventory__details">
				<div className="AddInventory__details-form-container">
					<h2 className="AddInventory__details-header">Item Details</h2>
					<form className="AddInventory__details-form" onSubmit={handleSubmit}>
						<h3 className="AddInventory__form-header">Item Name</h3>
						<input
							type="text"
							name="item_name"
							value={values.item_name}
							onChange={handleInputChange}
							className="AddInventory__details-input-1"
							placeholder="Item Name"></input>
						<p className="AddInventory--noerrorText" name="item_name_error">
							<img src={errorIcon} alt="errorIcon" />
							This field is required
						</p>

						<h3 className="AddInventory__form-header">Description</h3>
						<textarea
							type="text"
							name="description"
							value={values.description}
							onChange={handleInputChange}
							className="AddInventory__details-input"
							rows="5"
							placeholder="Please enter a brief item description"></textarea>
						<p className="AddInventory--noerrorText" name="description_error">
							<img src={errorIcon} alt="errorIcon" />
							This field is required
						</p>

						<div className="AddInventory__details-dropdown">
							<h3 className="AddInventory__form-header">Category</h3>
							<select
								name="category"
								value={values.category}
								onChange={handleInputChange}
								className="AddInventory__details-drop-down">
								<option>Please Select</option>
								{invCategory.map((data) => (
									<option key={data.id}>{data.category}</option>
								))}
							</select>
							<p className="AddInventory--noerrorText" name="category_error">
								<img src={errorIcon} alt="errorIcon" />
								This field is required
							</p>
						</div>
					</form>
				</div>

				<div className="AddInventory__form-container">
					<h2 className="AddInventory__form-header AddInventory__form-header--two">
						Item Availability
					</h2>
					<form className="AddInventory__form" onSubmit={handleSubmit}>
						<h5 className="AddInventory__form-header">Status</h5>
						<div className="AddInventory__radio-container">
							<div className="AddInventory__in">
								<input
									name="status"
									onClick={inStockHandler}
									onChange={handleInputChange}
									value="In Stock"
									checked={values.status === "In Stock"}
									type="radio"
									className="AddInventory__in-stock"></input>
								<p className="AddInventory__radio-title">In Stock</p>
							</div>

							<div className="AddInventory__out">
								<input
									name="status"
									type="radio"
									onChange={handleInputChange}
									value="Out of Stock"
									checked={values.status === "Out of Stock"}
									onClick={outOfStockHandler}
									className="AddInventory__in-stock"></input>
								<p className="AddInventory__radio-title">Out Of Stock</p>
							</div>
						</div>

						{quantity && (
							<>
								<h3 className="AddInventory__form-header">Quantity</h3>
								<input
									type="text"
									name="quantity"
									value={values.quantity}
									onChange={handleInputChange}
									className="AddInventory__details-input-1"
									placeholder="0"></input>
							</>
						)}

						<div className="AddInventory__details-dropdown ">
							<h3 className="AddInventory__form-header">Warehouse</h3>
							<select
								name="warehouse_id"
								value={values.warehouse_id}
								onChange={handleInputChange}
								className="AddInventory__details-drop-down">
								<option>Please Select</option>
								{warehouseData.map((data) => (
									<option key={data.id} value={data.id}>
										{data.warehouse_name}
									</option>
								))}
							</select>
							<p
								className="AddInventory--noerrorText"
								name="warehouse_id_error">
								<img src={errorIcon} alt="errorIcon" />
								This field is required
							</p>
						</div>
					</form>
				</div>
			</section>
			<div className="AddInventory__grey-bar">
				<div className="AddInventory__buttons-container">
					<button className="AddInventory__cancel" onClick={clickHandler}>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						type="submit"
						className="AddInventory__save">
						+ Add item
					</button>
				</div>
			</div>
		</section>
	);
}

export default AddInventory;
