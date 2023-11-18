import "./WarehouseDetails.scss";
import { Link, useParams } from "react-router-dom";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseDetails() {
	const { id } = useParams();

	const [warehouseData, setWarehouseData] = useState();

	useEffect(() => {
		axios.get(`http://localhost:8080/api/warehouses/${id}`).then((res) => {
			setWarehouseData(res.data[0]);
		});
	}, []);

	const [currentInv, setCurrentInv] = useState();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/warehouses/${id}/inventories`)
			.then((res) => {
				setCurrentInv(res.data);
			});
	}, []);
	return (
		<div>
			{/* <div className="warehouseDetails">
				<div className="warehouseDetails__header">
					<div className="warehouseDetails__header--container">
						<Link to="/" className="warehouseDetails__header--link">
							<img
								className="warehouseDetails__header--icon"
								src={backArrow}
								alt="back-arrow"
							/>
						</Link>
						<p className="warehouseDetails__header--title">{warehouse_name}</p>
					</div>
					<button className="warehouseDetails__button"></button>
					<button className="warehouseDetails__button--special">Edit</button>
				</div>
				<div className="warehouseDetails__details">
					<div className="warehouseDetails__address">
						<p className="warehouseDetails__label">WAREHOUSE ADDRESS:</p>
						<p className="warehouseDetails__text">
							{`${address}, ${city}, ${country}`}
						</p>
					</div>
					<div className="warehouseDetails__contacts">
						<div className="warehouseDetails__contact-name">
							<p className="warehouseDetails__label">CONTACT NAME:</p>
							<p className="warehouseDetails__text">{contact_name}</p>
							<p className="warehouseDetails__text">{contact_position}</p>
						</div>
						<div className="warehouseDetails__contact-information">
							<p className="warehouseDetails__label">CONTACT INFORMATION:</p>
							<p className="warehouseDetails__text">{contact_phone}</p>
							<p className="warehouseDetails__text">{contact_email}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="inventoryList"> */}
			{/* inventoryHeader is only visable at 768px and above */}
			{/* <InventoryHeader />
				{currentInv.map((item) => (
					<InventoryCard
						key={item.id}
						itemName={item.item_name}
						quantity={item.quantity}
						status={item.status}
						category={item.category}
					/>
				))}
			</div> */}
		</div>
	);
}

export default WarehouseDetails;
