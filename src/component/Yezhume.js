import React, { Component } from 'react';
import  Yezhuamend from './Yezhu_amend';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhume extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/yezhu/index/me' render={() => (
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
                            <Link to="/yezhu/index/me/amend">
                                <div className="arrow">></div>
                            </Link>
                        </div>
                        <div className="myself_now">
                            <div className="now_left">
                                <p>身份</p>
                                <p>待审核</p>
                            </div> 
                            <div className="now_right">
                                <p>当前房屋人数</p>
                                <p>0</p>
                            </div> 
                        </div>
                        {/*list*/}
                        <ul className="list">
                            <li className="white">  </li>
                            <li className="clear">
                                <span className="left">我的房屋</span>
                                <span className="right">></span>
                            </li>
                            <li className="clear">
                                <span className="left">我参与的活动</span>
                                <span className="right">></span>
                            </li>
                        </ul>
                    </div>
                )} />
                <Route path="/yezhu/index/me/amend" component={Yezhuamend}/>  
            </div>
        </Router>
    )
  }
}

export default Yezhume;