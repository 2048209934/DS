import React, { Component } from 'react';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';

class Yezhuaddress extends Component {
  go=function(){
    window.history.go(-1);
  }
    componentDidMount(){
    $(".admin_con").hide()
        var yy=JSON.parse(window.sessionStorage.getItem("yezhu"))
        
        this.props.yezhu_addres(yy[0].address)
       
    }
    componentWillUnmount(){
      $(".admin_con").show()
    }
  render() {
    return (
    	  <div>
           <div className="package_head">
                <img className="back" src="../../images/arrow.png" onClick={this.go} alt="" />
                通知
            </div>
    
              <ul className="orgin_con">
                {console.log(this.props.data)}
                {this.props.data.map(function(e,i){
      return        <li key={i} className="baoxiu_box">
                        <div className="one">
                            <span>{e.village}</span>
                            <span>{e.address}</span>
                        </div> 
                        <p className="two">{e.con}</p>
                        <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
                    </li>
                  })}
              </ul>             
        </div>
    );
  }
}

export default connect(e=>({data:e.yezhuaddres}),action)(Yezhuaddress);