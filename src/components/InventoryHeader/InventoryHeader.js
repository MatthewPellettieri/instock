import "./InventoryHeader.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function InventoryHeader() {
	// displays certain fields only when URL is inventory, by adding --inventoryPage as class
	const ifInventoryPage = () => {
		if (window.location.href === "http://localhost:3000/inventory") {
			return true;
		} else {
			return false;
		}
	};

	let QtyLabel = ifInventoryPage() ? "QTY" : "QUANTITY";

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
			<div
				className={`inventoryHeader__right${
					ifInventoryPage() ? "--inventoryPage" : ""
				}`}>
				<div
					className={`inventoryHeader__container${
						ifInventoryPage() ? "--inventoryPage" : ""
					}`}>
					<p className="inventoryHeader__label">STATUS</p>
					<img
						src={sortIcon}
						alt="sort-icon"
						className="inventoryHeader__icon"
					/>
				</div>
				<div className="inventoryHeader__container">
					<p className="inventoryHeader__label">{QtyLabel}</p>
					<img
						src={sortIcon}
						alt="sort-icon"
						className="inventoryHeader__icon"
					/>
				</div>
				{/* --warehouse only shows up on /inventory page */}
				<div
					className={`inventoryHeader__container--warehouse ${
						ifInventoryPage() ? "" : "disable"
					}`}>
					<p className="inventoryHeader__label">WAREHOUSE</p>
					<img
						src={sortIcon}
						alt="sort-icon"
						className="inventoryHeader__icon"
					/>
				</div>
			</div>
			<div className="inventoryHeader__actions">
				<p className="inventoryHeader__label">ACTIONS</p>
			</div>
		</div>
	);
}

export default InventoryHeader;
