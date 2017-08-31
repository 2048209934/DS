import React, { Component } from 'react';
import  Bossdetail from './Boss_detail';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bosssteward extends Component {
  render() {
    return (
        <Router>
        	<div>
                <Route exact path='/boss/index' render={() => (
                    <div className="bj">
                        {/*header*/}
                        <p className="heads" id="head">
                            管家
                        </p>
                        <p className="all_xq">所有小区：</p>
                        <select className="more_xq">
                            <option>选择小区</option>
                            <option>金都景苑小区</option>
                            <option>幸福E家</option>
                            <option>纳帕溪谷</option>
                            <option>天伦锦城</option>
                            <option>雅居园小区</option>
                            <option>阳光佳园</option>
                        </select>
                        <Link to="/boss/index/detail">
                            <button className="xq_btn">确定</button>
                        </Link>
                    </div>
                )} /> 
                <Route path="/boss/index/detail" component={Bossdetail}/>
            </div>
        </Router>
    );
  }
}

export default Bosssteward;