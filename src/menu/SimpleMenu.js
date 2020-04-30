import React, { PureComponent } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
  ];

class SimpleMenu extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      anchorEl : null,
      selectedIndex : 0
    };
  };

  
  handleClick = (event) => {
    console.log('click', event.currentTarget);
    this.setState( { anchorEl : event.currentTarget} );
  };


  handleMenuItemClick = (event, index) => {
    console.log('handleSelected', event.currentTarget);
    this.setState( { anchorEl : null, selectedIndex : index } );
  };

  render() {
    return (<div>


      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={this.handleClick}
        color="primary" >
         Menu
      </Button>

      
       {  options[this.state.selectedIndex] }

      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        open={Boolean(this.state.anchorEl)}
        keepMounted
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === this.state.selectedIndex}
            selected={index === this.state.selectedIndex}
            onClick={(event) => this.handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>);
  }
}
export default SimpleMenu;
