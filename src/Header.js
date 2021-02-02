//import React from 'react';
//import './Header.css';

//const Header = function (props) {

/*
//inline styling approach 2
const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
 };
 */

//    return (
/*
//inline style Approach 1
<div style={{ textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' }}>
    Phone Directory
</div>
*/

//inline styling Approach 2
//       <div className="header">
//          {props.heading}
//       </div>
//  )
//}

import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.heading}
            </div>

        )
    }
}


export default Header;
