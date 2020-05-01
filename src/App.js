import React, { PureComponent } from "react";
import SimpleMenu   from './menu/SimpleMenu';
import FormatJson   from './demo/FormatJson/FormatJson';
import CreateSchema from './demo/CreateSchema/CreateSchema';
import FindForms    from './demo/FindForms/FindForms';
import ListItems    from './demo/ListItems/ListItems';


//import dataLoaderAndFilter from "./dataLoaderAndFilter";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuItem : ""
    };
  }

  menuSelected = (menuItem) => {
    console.log('menuSelected', menuItem);
    this.setState({menuItem});
  };

  render() {
    return (
      <div>
        <SimpleMenu >
          {this.menuSelected}
        </SimpleMenu>
        <hr/>

        {'FormatJson'===this.state.menuItem && <FormatJson/> }
        {'CreateSchema'===this.state.menuItem && <CreateSchema/> }
        {'FindForms'===this.state.menuItem && <FindForms/> }
        {'ListAllData'===this.state.menuItem &&
           <ListItems />
        }
        

      </div>
    );
  }
}
export default App;
