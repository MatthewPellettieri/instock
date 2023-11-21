import backButton from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import "./EditInventory.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// these are replaced by api data and saved in state. read on post to send data to api
const initialValues = {
	item_name: "",
	description: "",
	category: "",
	quantity: "",
	status: "",
	warehouse_id: "",
};

function EditInventory() {
	let { id } = useParams();

	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(-1);
	};

	const [quantity, setQuantity] = useState(false);
	const [warehouseData, setWarehouseData] = useState([]);
	const [inventoryData, setInventoryData] = useState([]);

	// check to see if all data is loaded
	const [loadingWare, setLoadingWare] = useState(false);
	const [loadingInv, setLoadingInv] = useState(false);

	const invCategory = [
		{ id: 1, category: "Electronics" },
		{ id: 2, category: "Gear" },
		{ id: 3, category: "Apparel" },
		{ id: 4, category: "Accessories" },
		{ id: 5, category: "Health" },
	];

	const wareHouseApi = "http://localhost:8080/api/warehouses/";
	const inventoryApi = "http://localhost:8080/api/inventories/";

	useEffect(() => {
		axios
			.get(`${wareHouseApi}`)
			.then((response) => {
				let wareHouseData = response.data;
				setWarehouseData(wareHouseData);
				setLoadingWare(true);
			})
			.then(
				axios.get(`${inventoryApi}/${id}`).then((response) => {
					let inventoryData = response.data;
					setValues({
						...values,
						warehouse_id: response.data[0].warehouse_id,
					});
					// controls initial render of quantity field
					if (response.data[0].quantity > 0) {
						setQuantity(true);
					}
					setInventoryData(inventoryData);
					setLoadingInv(true);
				})
			);
	}, []);

	// controls whether quantity field is rendered
	const inStockHandler = () => {
		setQuantity(true);
	};

	const outOfStockHandler = () => {
		setQuantity(false);
	};

	const [values, setValues] = useState(initialValues);

	// accessing and saving of form data
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// form validation
		if (!quantity) {
			values.quantity = "0";
		}
		if (values.quantity === "") {
			values.quantity = "0";
		}
		if (values.quantity === "0") {
			values.status = "Out of Stock";
		}

		if (values.item_name === "") {
			let textAreaDOM = document.getElementsByName("item_name");
			textAreaDOM[0].classList.add("editInventory--error");
			let errorTextDOM = document.getElementsByName(`item_name_error`);
			errorTextDOM[0].classList.add("editInventory--errorText");
		}

		if (values.description === "") {
			let textAreaDOM = document.getElementsByName("description");
			textAreaDOM[1].classList.add("editInventory--error");
			let errorTextDOM = document.getElementsByName(`description_error`);
			errorTextDOM[0].classList.add("editInventory--errorText");
		}

		if (values.category === "" || values.category === "Please Select") {
			let textAreaDOM = document.getElementsByName("category");
			textAreaDOM[0].classList.add("editInventory--error");
			let errorTextDOM = document.getElementsByName(`category_error`);
			errorTextDOM[0].classList.add("editInventory--errorText");
		}

		if (values.warehouse_id === "") {
			let textAreaDOM = document.getElementsByName("warehouse_id");
			textAreaDOM[0].classList.add("editInventory--error");
			let errorTextDOM = document.getElementsByName(`warehouse_id_error`);
			errorTextDOM[0].classList.add("editInventory--errorText");
		}

		// post request
		if (id) {
			axios
				.put(`http://localhost:8080/api/inventories/${id}`, values)
				.then((response) => {
					alert(`${response.data.item_name} edited`);
					navigate(-1);
				})
				.catch((err) => {
					alert(err);
					console.log(values);
				});
		}
	};

	if (!loadingInv || !loadingWare) {
		console.log("loading data");
	} else {
		// once data is loaded . replace initial values with api data
		const currentWarehouse = warehouseData.filter((warehouse) => {
			return inventoryData[0].warehouse_id === warehouse.id;
		});
		initialValues.item_name = inventoryData[0].item_name;
		initialValues.description = inventoryData[0].description;
		initialValues.category = inventoryData[0].category;
		initialValues.status = inventoryData[0].status;
		initialValues.quantity = inventoryData[0].quantity;

		return (
			<section className="editInventory">
				<div className="editInventory__header">
					<img
						className="editInventory__header-back-button"
						src={backButton}
						alt="button to back"
						onClick={clickHandler}></img>
					<h1 className="editInventory__title">Edit Inventory Item</h1>
				</div>

				<section className="editInventory__details">
					<div className="editInventory__details-form-container">
						<h2 className="editInventory__details-header">Item Details</h2>
						<form
							className="editInventory__details-form"
							onSubmit={handleSubmit}>
							<h3 className="editInventory__form-header">Item Name</h3>
							<input
								type="text"
								name="item_name"
								value={values.item_name}
								onChange={handleInputChange}
								className="editInventory__details-input-1"></input>
							<p className="editInventory--noerrorText" name="item_name_error">
								<img src={errorIcon} alt="errorIcon" />
								This field is required
							</p>

							<h3 className="editInventory__form-header">Description</h3>
							<textarea
								type="text"
								name="description"
								value={values.description}
								onChange={handleInputChange}
								className="editInventory__details-input"
								rows="5"></textarea>
							<p
								className="editInventory--noerrorText"
								name="description_error">
								<img src={errorIcon} alt="errorIcon" />
								This field is required
							</p>

							<div className="editInventory__details-dropdown">
								<h3 className="editInventory__form-header">Category</h3>
								<select
									name="category"
									value={values.category}
									onChange={handleInputChange}
									className="editInventory__details-drop-down">
									<option>Please Select</option>
									{invCategory.map((data) => (
										<option>{data.category}</option>
									))}
								</select>
								<p className="editInventory--noerrorText" name="category_error">
									<img src={errorIcon} alt="errorIcon" />
									This field is required
								</p>
							</div>
						</form>
					</div>
					<hr className="editInventory__divider" />
					<div className="editInventory__form-container">
						<h2 className="editInventory__form-header editInventory__form-header--two">
							Item Availability
						</h2>
						<form className="editInventory__form" onSubmit={handleSubmit}>
							<h5 className="editInventory__form-header">Status</h5>
							<div className="editInventory__radio-container">
								<div className="editInventory__in">
									<input
										name="status"
										type="radio"
										onChange={handleInputChange}
										value="In Stock"
										checked={values.status === "In Stock"}
										onClick={inStockHandler}
										className="editInventory__in-stock"></input>
									<p className="editInventory__radio-title">In Stock</p>
								</div>

								<div className="editInventory__out">
									<input
										name="status"
										type="radio"
										onChange={handleInputChange}
										value="Out of Stock"
										checked={values.status === "Out of Stock"}
										onClick={outOfStockHandler}
										className="editInventory__in-stock"></input>
									<p className="editInventory__radio-title">Out Of Stock</p>
								</div>
							</div>

							{/* only renders if quantity is true. this is set by radio buttons */}
							{quantity && (
								<>
									<h3 className="editInventory__form-header">Quantity</h3>
									<input
										type="text"
										name="quantity"
										value={values.quantity}
										onChange={handleInputChange}
										className="editInventory__details-input-1"></input>
								</>
							)}

							<div className="editInventory__details-dropdown">
								<h3 className="editInventory__form-header">Warehouse</h3>
								<select
									name="warehouse_id"
									value={values.warehouse_id}
									onChange={handleInputChange}
									className="editInventory__details-drop-down">
									<option value={currentWarehouse[0].id}>
										{currentWarehouse[0].warehouse_name}
									</option>
									{warehouseData
										.filter((data) => data.id !== currentWarehouse[0].id)
										.map((data) => (
											<option key={data.id} value={data.id}>
												{data.warehouse_name}
											</option>
										))}
								</select>
								<p
									className="editInventory--noerrorText"
									name="warehouse_id_error">
									<img src={errorIcon} alt="errorIcon" />
									This field is required
								</p>
							</div>
						</form>
					</div>
				</section>
				<div className="editInventory__grey-bar">
					<div className="editInventory__buttons-container">
						<button className="editInventory__cancel" onClick={clickHandler}>
							Cancel
						</button>
						<button className="editInventory__save" onClick={handleSubmit}>
							Save
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default EditInventory;
