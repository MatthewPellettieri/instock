import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
		{/* Warehouse */}
        <Route path="/" element={<Warehouse />}>
          <Route path="/:id" element={<WarehouseId />} />
        </Route>
        <Route path="/editWarehouse/:id" element={<EditWarehouse />}></Route>
		<Route path="/addWarehouse" element={<AddWarehouse />}></Route>
		{/* Inventory */}
        <Route path="/inventory" element={<Inventory />}>
          <Route path="/inventory/:id" element={<Inventory />} />
        </Route>
        <Route path="/editInventory/:id" element={<EditInventory />}></Route>
		<Route path="/addInventory" element={<AddInventory />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
