import React from 'react';
import classes from './styling.css';

class Banner extends React.Component {
    render() {
        return (
         <div>
            <header>Orbit Report</header>
            <p>Please click on the buttons to see the satellites in that orbit type.</p>
         </div>
        );
    }
}


export default Banner;