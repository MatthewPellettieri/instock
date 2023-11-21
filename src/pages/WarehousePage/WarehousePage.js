import { useNavigate, Navigate } from "react-router-dom";
import WarehouseComponent from "../../components/WarehouseComponent/WarehouseComponent";
import doubleArrow from "../../assets/Icons/sort-24px.svg";
import "./WarehousePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function WarehousePage() {
  // search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    return setSearchQuery(e.target.value.toLocaleLowerCase());
  };
  const searchFilter = (data) => {
    return data.filter((warehouse) => {
      return (
        warehouse.warehouse_name.toLowerCase().includes(searchQuery) ||
        warehouse.contact_name.toLowerCase().includes(searchQuery) ||
        warehouse.contact_email.toLowerCase().includes(searchQuery) ||
        warehouse.contact_phone.toLowerCase().includes(searchQuery) ||
        warehouse.address.toLowerCase().includes(searchQuery) ||
        warehouse.city.toLowerCase().includes(searchQuery) ||
        warehouse.country.toLowerCase().includes(searchQuery)
      );
    });
  };

  const navigate = useNavigate();
  const apiURL = "http://localhost:8080/api/warehouses/";

  // state that holds warehouse data 
  const [wareData, setWareData] = useState();

  // Refreshes page on delete request
  const updatePage = () => {
    axios.get(apiURL).then((res) => {
      setWareData(res.data);
    });
  };

  // delete logic 
  const deleteWarehouse = (id) => {
    console.log(id);
    axios
      .delete(apiURL + id)
      .then(() => {
        updatePage();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // renders warehouse data from API
  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setWareData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // redirects to add warehouse
  const clickHandler = () => {
    navigate("/warehouse/add");
  };

  // loading data notification 
  if (!wareData) {
    console.log("loading data");
  } else {
    return (
      <>
        <Navigate to="/warehouse" replace={true} />
        <div className="warehouse__container">
          <div className="warehouse__head">
            <h1 className="warehouse__header">Warehouses</h1>

            <input
              className="warehouse__search-bar"
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            ></input>

            <button className="warehouse__button-blue" onClick={clickHandler}>
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
              alt="double arrow"
            ></img>
          </div>
          <div className="warehouseList__label two">
            <p className="warehouseList__name">address</p>
            <img
              className="warehouseList__icon"
              src={doubleArrow}
              alt="double arrow"
            ></img>
          </div>{" "}
          <div className="warehouseList__label three">
            <p className="warehouseList__name">contact name</p>
            <img
              className="warehouseList__icon"
              src={doubleArrow}
              alt="double arrow"
            ></img>
          </div>{" "}
          <div className="warehouseList__label-info">
            <p className="warehouseList__name-info">contact Information</p>
            <img
              className="warehouseList__icon"
              src={doubleArrow}
              alt="double arrow"
            ></img>
          </div>
          <div className="warehouseList__action">
            <p className="warehouseList__name action">actions</p>
          </div>
        </section>
        {searchFilter(wareData).map((data) => (
          <WarehouseComponent
            key={data.id}
            id={data.id}
            warehouseName={data.warehouse_name}
            contactName={data.contact_name}
            contactEmail={data.contact_email}
            contactPhone={data.contact_phone}
            address={data.address}
            city={data.city}
            country={data.country}
            deleteWarehouse={deleteWarehouse}
          />
        ))}
      </>
    );
  }
}
export default WarehousePage;
