import React, { Component } from 'react';
import './../css/boss_shequ.css';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'
const history = createHistory();
class Bossshequ extends Component {
componentDidMount(){		
	this.props.bosssqfn()	
	}
  render() {
    return (
    	<Router history={history}>
            <div>
                {/*header*/}
                <p className="head" id="head">
                    社区
                </p>
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
        </Router>

    );
  }
}
export default connect(e=>({data:e.bosslt}),action)(Bossshequ);
