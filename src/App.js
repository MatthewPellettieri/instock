import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseForms from "./components/WarehouseForms/WarehouseForms";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import Footer from "./components/Footer/footer";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddNewInventory/AddNewInventory";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="whiteBox">
					<Routes>
						{/* ------------------Warehouse-------------------------------- */}
						<Route path="/" element={<WarehousePage />}></Route>
						<Route path="/warehouse/:id" element={<WarehouseDetails />} />
						<Route
							path="/warehouse/:id/edit"
							element={
								<WarehouseForms heading="Edit Warehouse" buttonText="Save" />
							}></Route>
						<Route
							path="/warehouse/add"
							element={
								<WarehouseForms
									heading="Add New Warehouse"
									buttonText="+ Add Warehouse"
								/>
							}></Route>
						{/* -------------------------Inventory----------------- */}
						<Route path="/inventory" element={<InventoryPage />}></Route>
						<Route path="/inventory/:id" element={<InventoryItem />} />
						<Route
							path="/inventory/:id/edit"
							element={<EditInventory />}></Route>
						<Route path="/inventory/add" element={<AddInventory />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
