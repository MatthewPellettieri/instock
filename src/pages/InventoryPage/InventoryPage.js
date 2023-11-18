import "./InventoryPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

function InventoryPage() {
	const apiURL = "http://localhost:8080/api/inventories";

	const [invData, setInvData] = useState();

	useEffect(() => {
		axios
			.get(apiURL)
			.then((res) => {
				setInvData(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/addItem");
	};

	// search functionality
	const [searchQuery, setSearchQuery] = useState("");

	const searchFilter = (data) => {
		return data.filter((item) => {
			return (
				item.item_name.toLowerCase().includes(searchQuery) ||
				item.category.toLowerCase().includes(searchQuery) ||
				item.warehouse_name.toLowerCase().includes(searchQuery)
			);
		});
	};

	if (!invData) {
		console.log("loading data");
	} else {
		return (
			<div className="inventoryPage">
				<div className="inventoryPage__header">
					<div className="inventoryPage__title">
						<p className="inventoryPage__title--text">Inventory</p>
					</div>
					<div className="inventoryPage__container">
						<form className="inventoryPage__form">
							<input
								className="inventoryPage__form--input"
								type="text"
								id="search"
								name="search"
								placeholder="Search..."
								onChange={(e) =>
									setSearchQuery(e.target.value.toLocaleLowerCase())
								}></input>
						</form>
						<button className="inventoryPage__button" onClick={handleClick}>
							+ Add New Item
						</button>
					</div>
				</div>
				<InventoryHeader />
				{searchFilter(invData).map((item) => (
					<InventoryCard
						key={item.id}
						id={item.id}
						itemName={item.item_name}
						quantity={item.quantity}
						status={item.status}
						category={item.category}
						warehouse={item.warehouse_name}
					/>
				))}
			</div>
		);
	}
}

export default InventoryPage;
