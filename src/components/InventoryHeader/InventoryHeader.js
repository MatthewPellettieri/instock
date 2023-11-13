import "./InventoryHeader.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function InventoryHeader() {
	// const ifInventoryPage = () => {
	// 	if (window.location.href === "http://localhost:3000/inventory") {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	return (
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
	);
}

export default InventoryHeader;
