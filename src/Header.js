import React from 'react';

const Header = function () {

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
            Phone Directory
         </div>
    )
}

export default Header;