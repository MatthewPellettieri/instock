import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import warehouseData from "../../test_data/warehouse_JSON.json";
import inventoryData from "../../test_data/inventory_JSON.json";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseDetails() {
	const {
		warehouse_name,
		address,
		city,
		country,
		contact_name,
		contact_email,
		contact_phone,
		contact_position,
	} = warehouseData[0];

	const warehouseInv = inventoryData.filter((item) => item.warehouse_id === 1);

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
			<div className="inventoryList">
				{/* inventoryHeader is only visable at 768px and above */}
				<div className="inventoryHeader">
					<div className="inventoryHeader__left">
						<div className="inventoryHeader__container">
							<p className="inventoryHeader__label">INVENTORY ITEM</p>
							<img
								src={sortIcon}
								alt="sort-icon"
								className="inventoryHeader__icon"
							/>
						</div>
						<div className="inventoryHeader__container">
							<p className="inventoryHeader__label">CATEGORY</p>
							<img
								src={sortIcon}
								alt="sort-icon"
								className="inventoryHeader__icon"
							/>
						</div>
					</div>
					<div className="inventoryHeader__right">
						<div className="inventoryHeader__container">
							<p className="inventoryHeader__label">STATUS</p>
							<img
								src={sortIcon}
								alt="sort-icon"
								className="inventoryHeader__icon"
							/>
						</div>
						<div className="inventoryHeader__container">
							<p className="inventoryHeader__label">QUANTITY</p>
							<img
								src={sortIcon}
								alt="sort-icon"
								className="inventoryHeader__icon"
							/>
						</div>
						<div className="inventoryHeader__container">
							<p className="inventoryHeader__label">ACTIONS</p>
						</div>
					</div>
				</div>
				{warehouseInv.map((item) => (
					<InventoryCard
						key={item.id}
						itemName={item.item_name}
						quantity={item.quantity}
						status={item.status}
						category={item.category}
					/>
				))}
			</div>
		</div>
	);
}

export default WarehouseDetails;
