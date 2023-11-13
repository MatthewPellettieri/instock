import "./InventoryPage.scss";
import inventoryData from "../../test_data/inventory_JSON.json";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

function InventoryPage() {
	return (
		<div className="inventoryPage">
			<div className="inventoryPage__header">
				<div className="inventoryPage__header--container">
					<p className="inventoryPage__header--title">Inventory</p>
				</div>
				<button className="inventoryPage__button"></button>
				<button className="inventoryPage__button--special">Edit</button>
			</div>
			<InventoryHeader />
			{inventoryData.map((item) => (
				<InventoryCard
					key={item.id}
					itemName={item.item_name}
					quantity={item.quantity}
					status={item.status}
					category={item.category}
				/>
			))}
		</div>
	);
}

export default InventoryPage;
