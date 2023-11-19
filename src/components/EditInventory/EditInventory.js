import backButton from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import React, { useEffect, useState } from "react";

function EditInventory() {
  const [quantity, setQuantity] = useState(false);
  const inStockHandler = () => {
    setQuantity(true);
  };

  const outOfStockHandler = () => {
    setQuantity(false);
  };

  return (
    <section className="editInventory">
      <div className="editInventory__header">
        <img
          className="editInventory__header-back-button"
          src={backButton}
          alt="button to back"
        ></img>
        <h1 className="editInventory__title">Edit Inventory Item</h1>
      </div>

      <section className="editInventory__details">
        <div className="editInventory__details-form-container">
          <h2 className="editInventory__details-header">Item Details</h2>
          <form className="editInventory__details-form">
            <h3 className="editInventory__form-header">Item Name</h3>
            <input
              type="text"
              name="item name"
              className="editInventory__details-input-1"
              placeholder="Television"
            ></input>

            <h3 className="editInventory__form-header">Description</h3>
            <textarea
              type="text"
              name="item description"
              className="editInventory__details-input"
              rows="5"
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'
            ></textarea>

            <div className="editInventory__details-dropdown">
              <h3 className="editInventory__form-header">Category</h3>
              <select
                name="categories"
                className="editInventory__details-drop-down"
              >
                <option value="Electronics">Electronics</option>
              </select>
            </div>
          </form>
        </div>
        <hr className="editInventory__divider" />
        <div className="editInventory__form-container">
          <h2 className="editInventory__form-header editInventory__form-header--two">
            Item Availability
          </h2>
          <form className="editInventory__form">
            <h5 className="editInventory__form-header">Status</h5>
            <div className="editInventory__radio-container">
              <div className="editInventory__in">
                <input
                  name="instock-radio"
                  type="radio"
                  onClick={inStockHandler}
                  className="editInventory__in-stock"
                ></input>
                <p className="editInventory__radio-title">In Stock</p>
              </div>

              <div className="editInventory__out">
                <input
                  name="instock-radio"
                  type="radio"
                  onClick={outOfStockHandler}
                  className="editInventory__in-stock"
                ></input>
                <p className="editInventory__radio-title">Out Of Stock</p>
              </div>
            </div>

            {quantity && (
              <>
                <h3 className="editInventory__form-header">Quantity</h3>
                <input
                  type="text"
                  name="quantity"
                  className="editInventory__details-input-1"
                  placeholder="0"
                ></input>
              </>
            )}

            <div className="editInventory__details-dropdown">
              <h3 className="editInventory__form-header">Warehouse</h3>
              <select
                name="categories"
                className="editInventory__details-drop-down"
              >
                <option value="Electronics">Manhattan</option>
              </select>
            </div>
          </form>
        </div>
      </section>
      <div className="editInventory__grey-bar">
        <div className="editInventory__buttons-container">
          <button className="editInventory__cancel">Cancel</button>
          <button className="editInventory__save">Save</button>
        </div>
      </div>
    </section>
  );
}

export default EditInventory;
