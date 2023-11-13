import "./InventoryPage.scss";
import inventoryData from "../../test_data/inventory_JSON.json";

function InventoryPage() {
	// const ifInventoryPage = () => {
	// 	if (window.location.href === "http://localhost:3000/inventory") {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	return (
		<div className="inventoryPage">
			<div className="inventoryPage__header">
				<div className="inventoryPage__header--container">
					<p className="inventoryPage__header--title">Inventory</p>
				</div>
				<button className="inventoryPage__button"></button>
				<button className="inventoryPage__button--special">Edit</button>
			</div>
		</div>
	);
}

export default InventoryPage;
