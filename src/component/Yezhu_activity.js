import React, { Component } from 'react';

import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import * as action from './../action/action'
import {connect} from 'react-redux';

class Yezhuactivity extends Component {
	componentDidMount(){
        var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'));
        this.props.yezhu_activity(yezhu[0].id,yezhu[0].address);
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
            <ul className="activity">
                {this.props.data.map(function(e,i){
                    return(
                        <li key={i} className="activities">
                            <p><span>发布人:</span><span>{e.name}</span></p>
                            <p><span>活动内容:</span>{e.con}</p>
                            <p className="activity_time"><span><img className="left" src="../../../images/time.png" alt=""/></span><span>{e.time.substr(0,19).split("T").join("   ")}</span></p>
                        </li>
                    )
                }
            )}
            </ul>
        </div>
    )
  }
}


export default connect(e=>({data:e.yezhuactivity}),action)(Yezhuactivity);