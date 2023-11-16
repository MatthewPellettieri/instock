import "./InventoryItem.scss";
import { Link, useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";

function InventoryItem() {
    const {id} = useParams();
    const [currentItem, setCurrentItem] = useState({});
    const [warehouseName, setWarehouseName] = useState("");
    useEffect(() => {
            const staticData = {
                "item_name": "Item Not Found",
                "description": "Not Available",
                "category": "Not Available",
                "status": "Out of Stock",
                "quantity": 0,
            };
            axios
            .get(`http://localhost:8080/api/inventories/${id}`)
            .then((res) => {
                setCurrentItem(res.data[0]);
                return axios.get(`http://localhost:8080/api/warehouses/${res.data[0].warehouse_id}`);
            })
            .then((res) => {
                setWarehouseName(res.data[0].warehouse_name);
            })
            .catch((err) => {
                setCurrentItem(staticData);
                setWarehouseName("Warehouse not listed");
                alert(err);
            });
    }, [id]);

    let navigate = useNavigate();
    const clickHandler = (event) =>{
        event.preventDefault();
        navigate(`/editInventory/${id}`);
    }

	return (
			<div className="inventoryItem">
				<div className="inventoryItem__header">
					<div className="inventoryItem__header--container">
						<Link to="/inventory" className="inventoryItem__header--link">
							<img
								className="inventoryItem__header--icon"
								src={backArrow}
								alt="back-arrow"
							/>
						</Link>
						<p className="inventoryItem__header--title">{currentItem.item_name}</p>
					</div>
					<button className="inventoryItem__button" onClick={clickHandler}></button>
					<button className="inventoryItem__button--special" onClick={clickHandler}>Edit</button>
				</div>
                <div className="inventoryItem__container">
                    <div className="inventoryItem__info-container">
                        <h4 className="inventoryItem__heading">ITEM DESCRIPTION:</h4>
                        <p className="inventoryItem__info">{currentItem.description}</p>
                        <h4 className="inventoryItem__heading">CATEGORY:</h4>
                        <p className="inventoryItem__info">{currentItem.category}</p>
                    </div>
                    <hr className="inventoryItem__divider" />
                    <div className="inventoryItem__stats-container">
                        <div className="inventoryItem__warehouse">
                            <h4 className="inventoryItem__heading">STATUS:</h4>
                            <div className="inventoryItem__info"><div
							className={`inventoryItem__tag${
								currentItem.status === "In Stock" ? "" : "--noStock"
							}`}>
							{currentItem.status && currentItem.status.toUpperCase()}
						</div></div>
                            <h4 className="inventoryItem__heading">WAREHOUSE:</h4>
                            <p className="inventoryItem__info">{warehouseName}</p>
                        </div>
                        <div className="inventoryItem__quantity"> 
                            <h4 className="inventoryItem__heading">QUANTITY:</h4>
                            <p className="inventoryItem__info">{currentItem.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default InventoryItem