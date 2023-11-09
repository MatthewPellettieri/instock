// import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link } from "react-router-dom";

function WarehousePage() {
	return (
		<div className="warehouse">
			<p>WAREHOUSE PAGE</p>
			{/* <WarehouseDetails /> */}
			<Link to="/warehouseDetails">
				<p> To warehouseDetails</p>
			</Link>
		</div>
	);
}

export default WarehousePage;
