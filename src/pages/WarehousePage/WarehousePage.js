import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import wareHouseData from "../../data/wareHouseData.json";
import warehouseComponent from "./WarehouseComponent";
console.log(wareHouseData);
function WarehousePage() {
  return (
    <section className="warehouse">
      <div className="warehouse__head">
        <h1>Warehouses</h1>
        <div className="warehouse__search">
          <input
            className="nav__search-bar"
            type="text"
            placeHolder="Search..."
          ></input>
        </div>
      </div>
      {/* <WarehouseDetails /> */}
    </section>
  );
}

export default WarehousePage;
