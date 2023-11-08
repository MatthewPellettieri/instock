import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					{/* ------------------Warehouse-------------------------------- */}
					<Route path="/" element={<WarehousePage />}>
						{/* <Route path="/:id" element={<WarehouseId />} /> */}
					</Route>
					{/* <Route path="/editWarehouse/:id" element={<EditWarehouse />}></Route>
		<Route path="/addWarehouse" element={<AddWarehouse />}></Route> */}

					{/* -------------------------Inventory----------------- */}
					<Route path="/inventory" element={<InventoryPage />}>
						{/* <Route path="/inventory/:id" element={<Inventory />} /> */}
					</Route>
					{/* <Route path="/editInventory/:id" element={<EditInventory />}></Route>
		<Route path="/addInventory" element={<AddInventory />}></Route>*/}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
