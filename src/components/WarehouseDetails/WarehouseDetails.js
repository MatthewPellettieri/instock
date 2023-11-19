import "./WarehouseDetails.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [warehouseData, setWarehouseData] = useState();
	const [currentInv, setCurrentInv] = useState();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/warehouses/${id}`)
			.then((res) => {
				setWarehouseData(res.data[0]);
			})
			.then(() => {
				axios
					.get(`http://localhost:8080/api/warehouses/${id}/inventories`)
					.then((res) => {
						setCurrentInv(res.data);
					});
			})
			.catch((err) => {
				alert(`No warehouse with id:${id} found`);
				navigate("/");
			});
	}, [id]);

	const handleClick = () => {
		navigate(`/warehouse/${id}/edit`);
	};

	// refresh page on inventory update
	const updatePage = () => {
		axios
			.get(`http://localhost:8080/api/warehouses/${id}/inventories`)
			.then((res) => {
				setCurrentInv(res.data);
			});
	};

	const deleteItem = (id) => {
		axios
			.delete(`http://localhost:8080/api/inventories/${id}`)
			.then(() => {
				updatePage();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	if (!warehouseData || !currentInv) {
		console.log("loading data");
	} else {
		return (
			<div>
				<div className="warehouseDetails">
					<div className="warehouseDetails__header">
						<div className="warehouseDetails__header--container">
							<Link to="/" className="warehouseDetails__header--link">
								<img
									className="warehouseDetails__header--icon"
									src={backArrow}
									alt="back-arrow"
								/>
							</Link>
							<p className="warehouseDetails__header--title">
								{warehouseData.warehouse_name}
							</p>
						</div>
						<button
							className="warehouseDetails__button"
							onClick={handleClick}></button>
						<button
							className="warehouseDetails__button--special"
							onClick={handleClick}>
							Edit
						</button>
					</div>
					<div className="warehouseDetails__details">
						<div className="warehouseDetails__address">
							<p className="warehouseDetails__label">WAREHOUSE ADDRESS:</p>
							<p className="warehouseDetails__text">
								{`${warehouseData.address}, ${warehouseData.city}, ${warehouseData.country}`}
							</p>
						</div>
						<div className="warehouseDetails__contacts">
							<div className="warehouseDetails__contact-name">
								<p className="warehouseDetails__label">CONTACT NAME:</p>
								<p className="warehouseDetails__text">
									{warehouseData.contact_name}
								</p>
								<p className="warehouseDetails__text">
									{warehouseData.contact_position}
								</p>
							</div>
							<div className="warehouseDetails__contact-information">
								<p className="warehouseDetails__label">CONTACT INFORMATION:</p>
								<p className="warehouseDetails__text">
									{warehouseData.contact_phone}
								</p>
								<p className="warehouseDetails__text">
									{warehouseData.contact_email}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="inventoryList">
					{/* inventoryHeader is only visable at 768px and above */}
					<InventoryHeader />
					{currentInv.map((item) => (
						<InventoryCard
							key={item.id}
							id={item.id}
							itemName={item.item_name}
							quantity={item.quantity}
							status={item.status}
							category={item.category}
							deleteItem={deleteItem}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default WarehouseDetails;
