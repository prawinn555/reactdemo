import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import DataResults from "./DataResults";
import dataLoaderAndFilter from "./dataLoaderAndFilter";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataToShow: dataLoaderAndFilter("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      dataToShow: dataLoaderAndFilter(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput searchNameChange={this.handleSearchChange} />
        <DataResults listData={this.state.dataToShow} />
      </div>
    );
  }
}
export default App;
