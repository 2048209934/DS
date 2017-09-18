import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';

class Wuyeshequ extends Component {
	componentDidMount(){
		
var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
	this.props.yezhutljs(wuye[0].village,wuye[0].id)	
	}
  render() {
    return (
    	  <div>
    	  	<div>
    	  	    <div className="wrap">
                  {/*header*/}
                    	<div>
                   <p className="head" id="head">
                        <span>社区</span>
                    </p>
                    {/*content*/}
                    <ul className="contents">
                    {this.props.data.map(function(e,i){
                    	return <li key={i} id="li" className="box">
                            <p className="name clear">
                                <img className="left" src={e.toux} style={{'borderRadius':'50%',height:'1.2rem'}} alt="" />
                                <span className="left">{e.name}</span>
                                <span className="left">在</span>
                                <span className="left">邻里分享</span>
                            </p>
                            <p className="luntancon">{e.con}</p>
                          
                         {e.img==null?"":e.img==""?"":e.img.split("?").map(function(v,s){
                            	return <img key={s} className=" luntanimgss" src={v} alt="" />
                            })}
                            <div className="luntansj">{e.time.substr(0,19).split("T").join("   ")}</div>
                        </li>
                    })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default connect(e=>({data:e.yezhuluntan}),action)(Wuyeshequ);