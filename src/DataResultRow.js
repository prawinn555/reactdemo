import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./DataResultRow.css";

class DataResultsRow extends PureComponent {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-data-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy data</span>
      </div>
    );
  }
}
DataResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};
export default DataResultsRow;
