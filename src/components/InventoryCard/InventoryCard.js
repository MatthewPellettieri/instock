import "./InventoryCard.scss";

function InventoryCard({ itemName, quantity, status, category }) {
	return (
		<div className="inventoryCard">
			<div className="inventoryCard__container">
				<div className="inventoryCard__item">
					<p className="inventoryCard__label">INVENTORY ITEM:</p>
					<p className="inventoryCard__content">{itemName}</p>
				</div>
				<div className="inventoryCard__category">
					<p className="inventoryCard__label">CATEGORY:</p>
					<p className="inventoryCard__content">{category}</p>
				</div>
			</div>
			<div className="inventoryCard__status">
				<div className="inventoryCard__container">
					<p className="inventoryCard__label">STATUS:</p>
					<p className="inventoryCard__content">{status}</p>
				</div>
				<div className="inventoryCard__quantity">
					<p className="inventoryCard__label">QTY</p>
					<p className="inventoryCard__content">{quantity}</p>
				</div>
			</div>
		</div>
	);
}

export default InventoryCard;
