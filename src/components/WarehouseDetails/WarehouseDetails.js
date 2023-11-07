import "./WarehouseDetails.scss";
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
		<div className="warehouseDetails">
			<div className="warehouse">
				<div className="warehouse__header">
					<div className="warehouse__header--container">
						<img
							className="warehouse__header--icon"
							src={backArrow}
							alt="back-arrow"
						/>
						<p className="warehouse__header--title">{warehouse_name}</p>
					</div>
					<button className="warehouse__button"></button>
					<button className="warehouse__button--special">Edit</button>
				</div>
				<div className="warehouse__details">
					<div className="warehouse__address">
						<p className="warehouse__label">WAREHOUSE ADDRESS:</p>
						<p className="warehouse__text">
							{`${address}, ${city}, ${country}`}
						</p>
					</div>
					<div className="warehouse__contacts">
						<div className="warehouse__contact-name">
							<p className="warehouse__label">CONTACT NAME:</p>
							<p className="warehouse__text">{contact_name}</p>
							<p className="warehouse__text">{contact_position}</p>
						</div>
						<div className="warehouse__contact-information">
							<p className="warehouse__label">CONTACT INFORMATION:</p>
							<p className="warehouse__text">{contact_phone}</p>
							<p className="warehouse__text">{contact_email}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="inventoryList">
				{/* inventoryHeader is only visable at 768px and above */}
				<div className="inventoryHeader">
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
