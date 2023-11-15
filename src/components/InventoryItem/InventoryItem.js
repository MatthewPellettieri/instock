import "./InventoryItem.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

function InventoryItem() {
    // const status = "Out of Stock"
    const status = "In Stock"
    const upperStatus = status.toUpperCase()
	return (
			<div className="inventoryItem">
				<div className="inventoryItem__header">
					<div className="inventoryItem__header--container">
						<Link to="/" className="inventoryItem__header--link">
							<img
								className="inventoryItem__header--icon"
								src={backArrow}
								alt="back-arrow"
							/>
						</Link>
						<p className="inventoryItem__header--title">Television</p>
					</div>
					<button className="inventoryItem__button"></button>
					<button className="inventoryItem__button--special">Edit</button>
				</div>
                <div className="inventoryItem__container">
                    <div className="inventoryItem__info-container">
                        <h4 className="inventoryItem__heading">ITEM DESCRIPTION:</h4>
                        <p className="inventoryItem__info">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                        <h4 className="inventoryItem__heading">CATEGORY:</h4>
                        <p className="inventoryItem__info">Electronics</p>
                    </div>
                    <hr className="inventoryItem__divider" />
                    <div className="inventoryItem__stats-container">
                        <div className="inventoryItem__warehouse">
                            <h4 className="inventoryItem__heading">STATUS:</h4>
                            <div className="inventoryItem__info"><div
							className={`inventoryItem__tag${
								status === "In Stock" ? "" : "--noStock"
							}`}>
							{upperStatus}
						</div></div>
                            <h4 className="inventoryItem__heading">WAREHOUSE:</h4>
                            <p className="inventoryItem__info">Manhattan</p>
                        </div>
                        <div className="inventoryItem__quantity"> 
                            <h4 className="inventoryItem__heading">QUANTITY:</h4>
                            <p className="inventoryItem__info">500</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default InventoryItem