import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.searchNameChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  searchNameChange: PropTypes.func
};
export default SearchInput;
