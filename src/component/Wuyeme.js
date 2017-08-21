import React, { Component } from 'react';
import  Wuyeamend from './Wuye_amend';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuyeme extends Component {
  render() {
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
                          <p>游客</p>
                          <p>大圣城市花园</p>
                      </div>
                      <Link to="/wuye/index/me/amend">
                           <div className="arrow">></div>
                      </Link>
                  </div>
                  <div className="myself_now">
                      <div className="now_left">
                          <p>评价</p>
                          <p>内容</p>
                      </div> 
                      <div className="now_right">
                          <p>评价分数</p>
                          <p>0</p>
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

export default Wuyeme;