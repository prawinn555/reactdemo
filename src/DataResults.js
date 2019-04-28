import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import DataResultRow from "./DataResultRow";
import "./DataResults.css";

class DataResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-data-results">
        {this.props.listData.map(dataItem => (
          <DataResultRow
            key={dataItem.title}
            symbol={dataItem.symbol}
            title={dataItem.title}
          />
        ))}
      </div>
    );
  }
}
DataResults.propTypes = {
	listData: PropTypes.array
};
export default DataResults;
