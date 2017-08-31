import React, { Component } from 'react';

import $ from 'jquery'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import  Bosswuye from './Boss_wuye';

import * as action from './../action/action'
import {connect} from 'react-redux';

class Bossdetail extends Component {
	componentDidMount(){
        $(".boss_con").hide()
    }
    componentWillUnmount(){
        $(".boss_con").show()
    }
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/boss/index/detail' render={() => (
                        <div className="bj">
                            <div className="heads">
                                <img className="back" src="../../images/arrow.png" onClick={this.fn} alt="" />
                                xxxx小区
                            </div>
                            <div className="all_count">
                                <p>目前住户总人数：1111</p>
                                <Link to="/boss/index/detail/bosswuye">
                                    <p>目前物业总人数：1111<span className="right">></span></p>
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

export default Bossdetail;