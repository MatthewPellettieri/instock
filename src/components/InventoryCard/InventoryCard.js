import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function InventoryCard({ itemName, quantity, status, category }) {
	return (
		<div className="inventoryCard">
			<div className="inventoryCard__top">
				<div className="inventoryCard__container">
					<div className="inventoryCard__item">
						<p className="inventoryCard__label">INVENTORY ITEM</p>
						<p className="inventoryCard__content">{itemName}</p>
					</div>
					<div className="inventoryCard__category">
						<p className="inventoryCard__label">CATEGORY</p>
						<p className="inventoryCard__text">{category}</p>
					</div>
				</div>
				<div>
					<div className="inventoryCard__status">
						<p className="inventoryCard__label">STATUS</p>
						<p className="inventoryCard__content">{status}</p>
					</div>
					<div className="inventoryCard__quantity">
						<p className="inventoryCard__label">QTY</p>
						<p className="inventoryCard__text">{quantity}</p>
					</div>
				</div>
			</div>
			<div className="inventoryCard__btm">
				<img src={deleteIcon} alt="delete-icon" />
				<img src={editIcon} alt="edit-icon" />
			</div>
		</div>
	);
}

export default InventoryCard;
