import React, { Component } from 'react';

import $ from 'jquery'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import  Bosswuye from './Boss_wuye';

import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory';

import imgs1 from "./images/arrow.png";


const history = createHistory();
class Bossdetail extends Component {
	componentDidMount(){
		var xq=window.sessionStorage.getItem('xq')
		this.props.bosszsxqhzd(xq);
        this.props.boss_lwuye(xq);
        $(".boss_con").hide()
    }
    componentWillUnmount(){
        $(".boss_con").show()
    }
    fn=function(){
        window.history.go(-1);
    }
    render() {
		var xq=window.sessionStorage.getItem('xq')
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/boss/index/detail' render={() => (
                        <div className="bj">
                            <div className="heads">
                                <img className="back" src={imgs1} onClick={this.fn} alt="" />
                                {xq}
                            </div>
                            <div className="all_count">
                                <p>目前住户总人数：{this.props.data.bosszsxqhzdata.length}</p>
                                <Link to="/boss/index/detail/bosswuye">
                                    <p>目前物业总人数：{this.props.data.bosslwuye.length}<span className="right">></span></p>
                                </Link>
                            </div>
                        </div>
                    )} /> 
                    <Route path="/boss/index/detail/bosswuye" component={Bosswuye}/>
                    
                </div>
            </Router>
        )
    }
}

export default connect(e=>({data:e}),action)(Bossdetail);