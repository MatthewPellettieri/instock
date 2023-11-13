import "./InventoryItem.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

function InventoryItem() {

	return (
		<div>
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
            </div>
        </div>
        )
    }

    export default InventoryItem