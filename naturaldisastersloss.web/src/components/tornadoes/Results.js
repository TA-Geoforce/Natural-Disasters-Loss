import React, { Component } from "react";
import PropTypes from 'prop-types';


class Results extends Component {
    constructor(props){
        super(props)

    }

    render(){
        if(this.props.data){
            let styleClass = 'bg-success';
            if (this.props.data.losses === "more than $5,000,000") {
                styleClass = 'bg-danger';
            }
            return(
                <div className={styleClass}><h3>The state '{this.props.data.state}' for the month {this.props.data.month} will have losses {this.props.data.losses} with probability {Math.round(this.props.data.probability * 100)}%</h3></div>
            )
        }
        else{
            return null;
        }
    }
}

Results.propTypes = {
    data: PropTypes.object
  };

export default Results;