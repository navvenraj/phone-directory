
//import React from "react";
import React, { Component } from 'react';
import Header from './Header.js';
import './Header.css';
import './App.css';


/*
commented because subcribers are going to passed via state. 
  let subscribers = [
    {
      id:1,
      name: "Shilpha Baat",
      phone: "888889899"


    },
    {
      id:2,
      name: "Navven Raj",
      phone: "888889899"

    }
  ]
  */
 class App extends Component{

  constructor(){
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  render(){
    return (

      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
  
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
  
          {
            this.state.subscribersListToShow.map(sub =>{
              return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>
            })
          }
          
  
        </div>
      </div>
    );
  }

  
}

export default App;