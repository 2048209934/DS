import React, { Component } from 'react';
import './../css/btn.css';


class Btn extends Component {
  render() {
    return (
    	<button className="btn">{this.props.btnVal}</button>
    );
  }
}

export default Btn;