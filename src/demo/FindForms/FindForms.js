import React, { PureComponent } from "react";
import ListItems from '../ListItems/ListItems';

class FindForms extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ListItems filter='type=FORM' />
    );
  }
};
export default FindForms;