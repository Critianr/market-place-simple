import React, { Component } from "react";

class SelectQty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map((item, i) => (
      <option key={item.id} value={item.qty}>
        {item.qty}
      </option>
    ));

    return (
      <select
        name="customSearch"
        value={this.props.value}
        className="custom-search-select"
        onChange={this.props.handleChange}
      >
        <option>Cantidad</option>
        {options}
      </select>
    );
  }
}
export default SelectQty;
