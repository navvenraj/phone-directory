import React from 'react';

const Header = function (props) {

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

    return (
        /*
        //inline style Approach 1
        <div style={{ textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' }}>
            Phone Directory
        </div>
        */

        //inline styling Approach 2
         <div className="header">
            {props.heading}
         </div>
    )
}

export default Header;