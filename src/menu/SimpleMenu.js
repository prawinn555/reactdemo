import React, { PureComponent } from "react";
import Dropdown from 'react-bootstrap/Dropdown';



class SimpleMenu extends PureComponent {



  constructor(props) {
    super(props);
    this.state = {
       menuItemText : ""
    };

    const callback = this.props.children;
    callback("FindForms");
  };


  chooseMenu = (event) => {
    console.log('chooseMenu', 
        event.currentTarget.getAttribute('menuitem'),
        event.currentTarget.innerHTML,
       );
    const callback = this.props.children;
    callback(event.currentTarget.getAttribute('menuitem'));
    this.setState({
      menuItemText : event.currentTarget.innerHTML
    });
  };


  

  render() {
    return (<div className="container">

      <div className="row">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        Welcome !!
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
        
        <Dropdown className="px-2">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={this.chooseMenu} menuitem="FormatJson" >Simple example : How to format Json</Dropdown.Item>
            <Dropdown.Item href="#" onClick={this.chooseMenu} menuitem="CreateSchema" >Create a JSON form</Dropdown.Item>
            <Dropdown.Item href="#" onClick={this.chooseMenu} menuitem="FindForms" >Find all forms in database</Dropdown.Item>
            <Dropdown.Item href="#" onClick={this.chooseMenu} menuitem="ListAllData" >Everything in database</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

         <header>{this.state.menuItemText}</header>
      </div>
    </div>);
  }
}
export default SimpleMenu;
