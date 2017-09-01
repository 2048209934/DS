import React, { Component } from 'react';
import  Yezhuamend from './Yezhu_amend';
import  Yezhuactivity from './Yezhu_activity';
import  Yezhuhouse from './Yezhu_house';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';

class Yezhume extends Component {
    componentDidMount(){
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        this.props.yezhu_showhouse(yezhusjjson[0].address,yezhusjjson[0].family);
    }
    render() {
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
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
                                <p>{yezhusjjson[0].owner==1?'户主':'家属'}</p>
                            </div> 
                            <div className="now_right">
                                <p>当前房屋人数</p>
                                <p>共{this.props.data.length}人</p>
                            </div> 
                        </div>
                        {/*list*/}
                        <ul className="list">
                            <li className="white">  </li>
                            <Link to="/yezhu/index/me/house">
                                <li className="clear">
                                    <span className="left">我的房屋</span>
                                    <span className="right">></span>
                                </li>
                            </Link>
                            <Link to="/yezhu/index/me/activity">
                                <li className="clear">
                                    <span className="left">我参与的活动</span>
                                    <span className="right">></span>
                                </li>
                            </Link>
                        </ul>
                        <Link className="yztcdl" to="/yezhu/index">退出登录</Link>
                    </div>
                )} />
                <Route path="/yezhu/index/me/amend" component={Yezhuamend}/>
                <Route path="/yezhu/index/me/activity" component={Yezhuactivity}/>   
                <Route path="/yezhu/index/me/house" component={Yezhuhouse}/>  
            </div>
        </Router>
    )
  }
}


export default connect(e=>({data:e.add_yezhuhouse}),action)(Yezhume);