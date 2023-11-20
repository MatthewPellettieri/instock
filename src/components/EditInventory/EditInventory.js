import backButton from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

	const [quantity, setQuantity] = useState(false);
	const [warehouseData, setWarehouseData] = useState([]);
	const [inventoryData, setInventoryData] = useState([]);
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
					setInventoryData(inventoryData);
					setLoadingInv(true);
				})
			);
	}, []);

	const inStockHandler = () => {
		setQuantity(true);
	};

	const outOfStockHandler = () => {
		setQuantity(false);
	};

	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(-1);
	};

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (values.quantity === "") {
			values.quantity = "0";
		}
		if (values.quantity === "0") {
			values.status = "Out of Stock";
		}

		if (id) {
			axios
				.put(`http://localhost:8080/api/inventories/${id}`, values)
				.then((response) => {
					alert(`${response.data.item_name} edited`);
					navigate(-1);
				})
				.catch(() => {
					alert("failed to edit item");
				});
		}
	};

	if (!loadingInv || !loadingWare) {
		console.log("loading data");
	} else {
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

							<h3 className="editInventory__form-header">Description</h3>
							<textarea
								type="text"
								name="description"
								value={values.description}
								onChange={handleInputChange}
								className="editInventory__details-input"
								rows="5"
								placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'></textarea>

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

							{quantity && (
								<>
									<h3 className="editInventory__form-header">Quantity</h3>
									<input
										type="text"
										name="quantity"
										value={values.quantity}
										onChange={handleInputChange}
										className="editInventory__details-input-1"
										placeholder="0"></input>
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
