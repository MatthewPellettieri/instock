import "./WarehouseDetails.scss";
import warehouseData from "../../test_data/warehouse_JSON.json";
import inventoryData from "../../test_data/inventory_JSON.json";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard";

function WarehouseDetails() {
	console.log(inventoryData);
	console.log(warehouseData);

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
						<p className="warehouse__header--title">WAREHOUSE NAME</p>
					</div>
					<button className="warehouse__header--button">EDIT</button>
				</div>
				<div className="warehouse__details">
					<div className="warehouse__address">
						<p className="warehouse__label">WAREHOUSE ADDRESS:</p>
						<p className="warehouse__text">
							33 pearl street SW, washington USA
						</p>
					</div>
					<div className="warehouse__contacts">
						<div className="warehouse__contact-name">
							<p className="warehouse__label">CONTACT NAME:</p>
							<p className="warehouse__text">graeme lyon</p>
							<p className="warehouse__text">Warehouse manager</p>
						</div>
						<div className="warehouse__contact-information">
							<p className="warehouse__label">CONTACT INFORMATION:</p>
							<p className="warehouse__text">+1(1928)301-0911</p>
							<p className="warehouse__text">glyon@instock.com</p>
						</div>
					</div>
				</div>
			</div>
			<InventoryCard />
		</div>
	);
}

export default WarehouseDetails;
