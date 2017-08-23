import React, { Component } from 'react';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class YezhuAccept extends Component {
		componentDidMount(){
			$(".admin_con").hide()
		}
		componentWillUnmount(){
			$(".admin_con").show()
		}
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <div className="package_head">
                    <img className="back" src="../../images/arrow.png" onClick={this.fn} alt="" />
                    访客邀请
                </div>
                
            </div>
        )
    }
}

export default YezhuAccept;