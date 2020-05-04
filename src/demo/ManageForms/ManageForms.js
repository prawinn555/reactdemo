import React, { PureComponent } from "react";
import icons from 'glyphicons';
import ManageList from '../ManageData/ManageList';

class ManageForms extends PureComponent {
  render() {
    return (   
      <div className="px-2" >
          <ManageList filter='type=FORM' />
          New form : 
                <span className="px-2" >
                  <button >
                    {icons.plus}
                  </button>
                </span>
      </div>
    );
  }
};
export default ManageForms;