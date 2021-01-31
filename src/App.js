  
import React from "react";
import Header from './Header.js';
import './Header.css';

function App() {
  return (
    <div>
      <Header/>
      <button>Add</button>
      <div>
        <span>Name</span><br />
        <span>Phone</span>
      </div>
    </div>
  );
}

export default App;