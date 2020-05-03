import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SimpleMenu   from './menu/SimpleMenu';
import FormatJson   from './demo/FormatJson/FormatJson';
import EditRawJson     from './demo/EditRawJson/EditRawJson';
import FindForms    from './demo/FindForms/FindForms';
import ListItems    from './demo/ListItems/ListItems';
import DynamicForm     from './demo/DynamicForm/DynamicForm';
import EditCustomForm  from './demo/DynamicForm/EditCustomForm';

//import dataLoaderAndFilter from "./dataLoaderAndFilter";


export default function App(props) {


    return (
      <div>

      <Router>

        <SimpleMenu selectedMenu={''} >
        </SimpleMenu>

        <hr/>
        
        <Switch>
          <Route path="/FormatJson">
            <FormatJson />
          </Route>
          <Route path="/EditRawJson">
            <EditRawJson objectType="FORM" />
          </Route>
          <Route path="/FindForms">
            <FindForms />
          </Route>
          <Route path="/ListAllData">
            <ListItems />
          </Route>
          <Route path="/DynamicForm">
            <DynamicForm />
          </Route>
          <Route path="/EditCustomForm">
            <DynamicForm />
          </Route>
          <Route path="/">
            <h1>Please select a menu</h1>
          </Route>
        </Switch>
      </Router>

      </div>
      
    );
  
}

