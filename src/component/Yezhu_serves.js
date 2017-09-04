import React, { Component } from 'react';

import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action'
import {connect} from 'react-redux';


class Yezhuserves extends Component {
	componentDidMount(){
		var yezhusj=window.sessionStorage.getItem('yezhu')
		var yezhusjjson=JSON.parse(yezhusj)
		this.props.yzdpwyd(yezhusjjson[0].address,yezhusjjson[0].id)
		$(".admin_con").hide()
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
  go=function(){
    window.history.go(-1)
  }
  haop(id){
		var yezhusj=window.sessionStorage.getItem('yezhu')
		var yezhusjjson=JSON.parse(yezhusj)
  	this.props.yzhpwyd(id,yezhusjjson[0].id,yezhusjjson[0].address)
  }
  chap(id){
		var yezhusj=window.sessionStorage.getItem('yezhu')
		var yezhusjjson=JSON.parse(yezhusj)
  	this.props.yzcpwyd(id,yezhusjjson[0].id,yezhusjjson[0].address)
  }
  render() {
		var yezhusj=window.sessionStorage.getItem('yezhu')
		var yezhusjjson=JSON.parse(yezhusj)
    return (
    	<div>
            {/*header*/}
            <p className="head" id="head">{console.log(this.props.data)}
                <img onClick={this.go} src="../../../images/arrow.png" alt="" />
                <span>他们为你服务</span>
            </p>
            <div className="kong"></div>
           {
            	this.props.data.map(function(v,i){
            		return <div key={i} className="serves clear">
            			<div className="serves_left left">
	                  <img src="../../../images/bai.png" alt="" />
	                </div>
	                <div className="serves_right left">
                    <p>{v.name}</p>
                    <div className="zan clear">
                        <p className="left zan_first clear" onClick={this.chap.bind(this,v.id)}>
                            <img className="left" src={v.chas=="false"?"../../../images/cw.png":"../../../images/cy.png"} alt="" />
                            <span className="left">
                            {(v.cha==null||v.cha=='')?"0":v.cha.split("?").length}
                            </span>
                        </p>
                        <p className="left zan_second clear" onClick={this.haop.bind(this,v.id)}>
                            <img className="left" src={v.haos=="false"?"../../../images/hw.png":"../../../images/hy.png"} alt="" />
                            <span className="left">
                            {(v.hao==null||v.hao=='')?"0":v.hao.split("?").length}
                            </span>
                        </p>
                    </div>
                </div>
            		</div>
            	}.bind(this))
           }
        </div>  	
    )
  }
}

export default connect(e=>({data:e.yzpjwydata}),action)(Yezhuserves);