import "./InventoryPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

function InventoryPage() {
	const apiURL = "http://localhost:8080/api/inventories/";

	// state that holds the data for inventory page
	const [invData, setInvData] = useState();

	// refreshes page for delete request
	const updatePage = () => {
		axios.get(apiURL).then((res) => {
			setInvData(res.data);
		});
	};

	const navigate = useNavigate();

	// delete logic
	const deleteItem = (id) => {
		axios
			.delete(apiURL + id)
			.then(() => {
				updatePage();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// Renders the data for inventory page from API
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

	// redirects to add warehouse
	const handleClick = () => {
		navigate("/inventory/add");
	};
	// search functionality 
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		return setSearchQuery(e.target.value.toLocaleLowerCase());
	};
	const searchFilter = (data) => {
		return data.filter((item) => {
			return (
				item.item_name.toLowerCase().includes(searchQuery) ||
				item.category.toLowerCase().includes(searchQuery) ||
				item.warehouse_name.toLowerCase().includes(searchQuery)
			);
		});
	};
	// loading data notification
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
								onChange={handleSearch}></input>
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
						deleteItem={deleteItem}
					/>
				))}
			</div>
		);
	}
}

export default InventoryPage;
