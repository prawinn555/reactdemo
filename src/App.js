import React, { PureComponent } from "react";
import Header from "./Header";

import SimpleMenu from './menu/SimpleMenu';

//import dataLoaderAndFilter from "./dataLoaderAndFilter";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        {/* title */}
        <Header />
        <SimpleMenu />
      </div>
    );
  }
}
export default App;
