import "./InventoryCard.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";

function InventoryCard({
	itemName,
	quantity,
	status,
	category,
	warehouse,
	id,
}) {
	const upperStatus = status.toUpperCase();

	const ifInventoryPage = () => {
		if (window.location.href === "http://localhost:3000/inventory") {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="inventoryCard">
			<div className="inventoryCard__top">
				<div className="inventoryCard__container--left">
					<div className="inventoryCard__item">
						<p className="inventoryCard__label">INVENTORY ITEM</p>
						<Link to={`${id}`} className="inventoryCard__link">
							<p className="inventoryCard__link--text">{itemName}</p>
							<img
								src={chevron}
								alt="chevron-icon"
								className="inventoryCard__link--icon"
							/>
						</Link>
					</div>
					<div className="inventoryCard__category">
						<p className="inventoryCard__label">CATEGORY</p>
						<p className="inventoryCard__text">{category}</p>
					</div>
				</div>
				<div
					className={`inventoryCard__container--right${
						ifInventoryPage() ? "--inventoryPage" : ""
					}`}>
					<div
						className={`inventoryCard__status${
							ifInventoryPage() ? "--inventoryPage" : ""
						}`}>
						<p className="inventoryCard__label">STATUS</p>
						<div
							className={`inventoryCard__tag${
								status === "In Stock" ? "" : "--noStock"
							}`}>
							{upperStatus}
						</div>
					</div>
					<div
						className={`inventoryCard__quantity${
							ifInventoryPage() ? "--inventoryPage" : ""
						}`}>
						<p className="inventoryCard__label">QTY</p>
						<p className="inventoryCard__text">{quantity}</p>
					</div>
					<div
						className={`inventoryCard__warehouse ${
							ifInventoryPage() ? "" : "disable"
						}`}>
						<p className="inventoryCard__label">WAREHOUSE</p>
						<p className="inventoryCard__text">{warehouse}</p>
					</div>
				</div>
			</div>
			<div className="inventoryCard__btm">
				<img
					className="inventoryCard__btm--icon"
					src={deleteIcon}
					alt="delete-icon"
				/>
				<img
					className="inventoryCard__btm--icon"
					src={editIcon}
					alt="edit-icon"
				/>
			</div>
		</div>
	);
}

export default InventoryCard;
