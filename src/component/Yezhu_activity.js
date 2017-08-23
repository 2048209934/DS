import React, { Component } from 'react';

import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Yezhuactivity extends Component {
	componentDidMount(){
		$(".admin_con").hide()
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
  go=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	<div>
            {/*header*/}
            <p className="head" id="head">
                <img onClick={this.go} src="../../../images/arrow.png" alt="" />
                <span>我参与的活动</span>
            </p>
        </div>
    )
  }
}

export default Yezhuactivity;