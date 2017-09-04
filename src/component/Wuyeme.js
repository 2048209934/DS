import React, { Component } from 'react';
import  Wuyeamend from './Wuye_amend';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Wuyeme extends Component {
	componentDidMount(){
		var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
		this.props.wykzjdpjd(wuye[0].id)
	}
  render() {
  	var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
    return (
      <Router>
    	  <div>
            <Route exact path='/wuye/index/me' render={() => (
                <div className="myself">
                    <div className="myself_top">
                      <a href="#" className="file"  id="zpd">
                          <p id="pps"></p>
                          <input type="file" name="" id="file"/>
                      </a>
                      <div className="myself_word">
                          <p>{wuye[0].name}</p>
                          <p>{wuye[0].village}</p>
                      </div>
                      <Link to="/wuye/index/me/amend">
                           <div className="arrow">></div>
                      </Link>
                  </div>
                  <div className="myself_nows">
                      <div className="now_left">
                          <p>好评</p>
                          <p>{this.props.data==null?'':(this.props.data[0].hao==''?'0':this.props.data[0].hao.split("?").length)}</p>
                      </div> 
                      <div className="now_right">
                          <p>差评</p>
                          <p>{this.props.data==null?'':(this.props.data[0].cha==''?'0':this.props.data[0].cha.split("?").length)}</p>
                      </div> 
                  </div>
                </div>
            )} />
            <Route path="/wuye/index/me/amend" component={Wuyeamend}/>  
          </div>
        </Router>
    );
  }
}

export default connect(e=>({data:e.wykzjdpjdata}),action)(Wuyeme);