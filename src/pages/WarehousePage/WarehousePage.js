import { Link } from "react-router-dom";
import wareHouseData from "../../test_data/warehouse_JSON.json";
import WarehouseComponent from "../../components/WarehouseComponent/WarehouseComponent";
import doubleArrow from "../../assets/Icons/sort-24px.svg";
import "./WarehousePage.scss";

function WarehousePage() {
	return (
		<>
			<div className="warehouse__container">
				<div className="warehouse__head">
					<h1 className="warehouse__header">Warehouses</h1>

					<input
						className="warehouse__search-bar"
						type="text"
						placeholder="Search..."></input>

					<button className="warehouse__button-blue">
						<p className="warehouse__button-text">+ Add New Warehouse</p>
					</button>
				</div>
			</div>

			<section className="warehouseList">
				<div className="warehouseList__label one">
					<p className="warehouseList__name">warehouse</p>
					<img
						className="warehouseList__icon"
						src={doubleArrow}
						alt="double arrow"></img>
				</div>
				<div className="warehouseList__label two">
					<p className="warehouseList__name">address</p>
					<img
						className="warehouseList__icon"
						src={doubleArrow}
						alt="double arrow"></img>
				</div>{" "}
				<div className="warehouseList__label three">
					<p className="warehouseList__name">contact name</p>
					<img
						className="warehouseList__icon"
						src={doubleArrow}
						alt="double arrow"></img>
				</div>{" "}
				<div className="warehouseList__label-info">
					<p className="warehouseList__name-info">contact Information</p>
					<img
						className="warehouseList__icon"
						src={doubleArrow}
						alt="double arrow"></img>
				</div>
				<div className="warehouseList__action">
					<p className="warehouseList__name action">actions</p>
				</div>
			</section>
			{wareHouseData.map((data) => (
				<WarehouseComponent
					key={data.id}
					warehouseName={data.warehouse_name}
					contactName={data.contact_name}
					contactEmail={data.contact_email}
					contactPhone={data.contact_phone}
					address={data.address}
					city={data.city}
					country={data.country}
				/>
			))}
			<Link to="/warehouseDetails">
				<p> To warehouseDetails</p>
			</Link>
		</>
	);
}

export default WarehousePage;
