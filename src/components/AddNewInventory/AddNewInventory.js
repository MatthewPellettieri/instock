import backButton from "../../assets/Icons/arrow_back-24px.svg";
import "./AddNewInventory.scss";
import React, { useState } from "react";

function AddInventory() {
  const [quantity, setQuantity] = useState(false);

  const inStockHandler = () => {
    setQuantity(true);
  };

  const outOfStockHandler = () => {
    setQuantity(false);
  };

  return (
    <section className="AddInventory">
      <div className="AddInventory__header">
        <img
          className="AddInventory__header-back-button"
          src={backButton}
          alt="button to back"
        ></img>
        <h1 className="AddInventory__title">Add Inventory Item</h1>
      </div>

      <section className="AddInventory__details">
        <div className="AddInventory__details-form-container">
          <h2 className="AddInventory__details-header">Item Details</h2>
          <form className="AddInventory__details-form">
            <h3 className="AddInventory__form-header">Item Name</h3>
            <input
              type="text"
              name="item name"
              className="AddInventory__details-input-1"
              placeholder="Item Name"
            ></input>

            <h3 className="AddInventory__form-header">Description</h3>
            <textarea
              type="text"
              name="item description"
              className="AddInventory__details-input"
              rows="5"
              placeholder="Please enter a brief item description"
            ></textarea>

            <div className="AddInventory__details-dropdown">
              <h3 className="AddInventory__form-header">Category</h3>
              <select
                name="categories"
                className="AddInventory__details-drop-down"
              >
                <option value="Please select">Please Select</option>
              </select>
            </div>
          </form>
        </div>
        <hr className="AddInventory__divider" />
        <div className="AddInventory__form-container">
          <h2 className="AddInventory__form-header AddInventory__form-header--two">
            Item Availability
          </h2>
          <form className="AddInventory__form">
            <h5 className="AddInventory__form-header">Status</h5>
            <div className="AddInventory__radio-container">
              <div className="AddInventory__in">
                <input
                  name="instock-radio"
                  value="inStock"
                  onClick={inStockHandler}
                  type="radio"
                  className="AddInventory__in-stock"
                ></input>
                <p className="AddInventory__radio-title">In Stock</p>
              </div>

              <div className="AddInventory__out">
                <input
                  name="instock-radio"
                  type="radio"
                  value="outOfStock"
                  onClick={outOfStockHandler}
                  className="AddInventory__in-stock"
                ></input>
                <p className="AddInventory__radio-title">Out Of Stock</p>
              </div>
            </div>

            {quantity && (
              <>
                <h3 className="AddInventory__form-header">Quantity</h3>
                <input
                  type="text"
                  name="item name"
                  className="AddInventory__details-input-1"
                  placeholder="Item Name"
                ></input>
              </>
            )}

            <div className="AddInventory__details-dropdown ">
              <h3 className="AddInventory__form-header">Warehouse</h3>
              <select
                name="categories"
                className="AddInventory__details-drop-down"
              >
                <option value="Electronics">Please select</option>
              </select>
            </div>
          </form>
        </div>
      </section>
      <div className="AddInventory__grey-bar">
        <div className="AddInventory__buttons-container">
          <button className="AddInventory__cancel">Cancel</button>
          <button className="AddInventory__save">Save</button>
        </div>
      </div>
    </section>
  );
}

export default AddInventory;
