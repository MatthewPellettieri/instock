import "./InventoryPage.scss";
import inventoryData from "../../test_data/inventory_JSON.json";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

function InventoryPage() {
	return (
		<div className="inventoryPage">
			<div className="inventoryPage__header">
				<div className="inventoryPage__title">
					<p className="inventoryPage__title--text">Inventory</p>
				</div>
				<div className="inventoryPage__container">
					<form className="inventoryPage__form">
						<input
							className="inventoryPage__form--input"
							type="text"
							id="search"
							name="search"
							placeholder="Search..."></input>
					</form>
					<button className="inventoryPage__button">+ Add New Item</button>
				</div>
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
