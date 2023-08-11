import React from "react";

export const Filter = () => {
  return (
    <div>
      <h3>Filter</h3>
      <label>
        Location:
        <input type="text" />
      </label>
      <label>
        Price Range:
        <select name="price">
          <option value="any">Any</option>
          <option value="cheap">Cheap</option>
          <option value="moderate">Moderate</option>
          <option value="expensive">Expensive</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
