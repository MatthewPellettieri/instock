import backButton from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";

function EditInventory() {
  return (
    <section className="editInventory">
      <div className="editInventory__header">
        <img
          className="editInventory__header-back-button"
          src={backButton}
          alt="button to back"
        ></img>
        <h1 className="EditInventory__title">Edit Inventory Item</h1>
      </div>

      <section className="editInventory__details">
        <div className="editInventory__details-form-container">
          <h3 className="editInventory__details-header">Item Details</h3>
          <form className="editInventory__details-form">
            <h5 className="editInventory__form-header">Item Name</h5>
            <input
              type="text"
              name="item name"
              className="editInventory__details-input-1"
              placeholder="Television"
            ></input>

            <h5 className="editInventory__form-header">Description</h5>
            <textarea
              type="text"
              name="item description"
              className="editInventory__details-input"
              rows="5"
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'
            ></textarea>

            <div className="editInventory__details-dropdown">
              <h5 className="editInventory__form-header">Category</h5>
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
          <h3 className="editInventory__form-header">Item Availability</h3>
          <form className="editInventory__form">
            <h5 className="editInventory__form-header">Status</h5>
            <div className="editInventory__radio-container">
              <div className="editInventory__in">
                <input
                  name="instock-radio"
                  type="radio"
                  className="editInventory__in-stock"
                ></input>
                <p className="editInventory__radio-title">In Stock</p>
              </div>

              <div className="editInventory__out">
                <input
                  name="instock-radio"
                  type="radio"
                  className="editInventory__in-stock"
                ></input>
                <p className="editInventory__radio-title">Out Of Stock</p>
              </div>
            </div>

            <div className="editInventory__details-dropdown">
              <h5 className="editInventory__form-header">Warehouse</h5>
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
      <div className="editInventory__buttons-container">
        <button className="editInventory__cancel">Cancel</button>
        <button className="editInventory__save">Save</button>
      </div>
    </section>
  );
}

export default EditInventory;
