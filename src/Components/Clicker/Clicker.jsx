
import React from 'react';

import './Clicker.css';


class Clicker extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        };
    }


    render(){

        return(
            <div className="clickerDesign">Go {this.props.name}!!</div>
        )
    }
}

export default Clicker;