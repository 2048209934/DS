import React, { Component } from 'react';
import  YezhuServes from './Yezhu_serves';
import  Yezhubaoxiu from './Yezhubaoxiu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhusteward extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/yezhu/index/steward' render={() => (
                        <div>
                            {/*steward*/}
                            <div className="steward">
                                <p>管家一键呼是睿服务提供的贴心功能，你可以通过住这儿快速找到你的管家，提供一对一的服务。此功能需要通知产权登记人审核身份申请后才能使用，现在通知吗？</p>
                                <button>去通知</button>
                            </div>
                            {/*talk*/}
                            <div className="talk">
                                <p>你可以这样和我们互动：</p>
                                <p className="detail clear">
                                    <span className="left">维修</span>
                                    <span className="right">家里的灯管不亮了，麻烦安排维修师傅来修下，谢谢。</span>
                                </p>
                                <p className="detail clear">
                                    <span className="left">帮助</span>
                                    <span className="right">最近想给家里装修了，有优惠介绍吗？</span>
                                </p>
                                <p className="detail clear">
                                    <span className="left">帮助</span>
                                    <span className="right">管家，如何给一卡通充值？</span>
                                </p>
                            </div>
                            {/*list*/}
                            <ul className="list">
                                <li className="white">  </li>
                                <Link to="/yezhu/index/steward/serves">
                                    <li className="clear">
                                        <span className="left">他们为你服务</span>
                                        <span className="right">></span>
                                    </li>
                                </Link>
                                <Link to="/yezhu/index/steward/baoxiu">
                                    <li className="clear">
                                        <span className="left">保修</span>
                                        <span className="right">></span>
                                    </li>
                                </Link>
                                <li className="clear">
                                    <span className="left">访客邀请</span>
                                    <span className="right">></span>
                                </li>
                                <li className="clear">
                                    <span className="left">邮包</span>
                                    <span className="right">></span>
                                </li>
                                <li className="clear">
                                    <span className="left">物业缴费</span>
                                    <span className="right">></span>
                                </li>
                                <li className="clear">
                                    <span className="left">一卡通账单</span>
                                    <span className="right">></span>
                                </li>
                                <li className="clear">
                                    <span className="left">你知道么</span>
                                    <span className="right">></span>
                                </li>
                                <li className="white">  </li>
                                <li className="clear">
                                    <span className="left">房屋租赁</span>
                                    <span className="right">></span>
                                </li>
                                <li className="clear">
                                    <span className="left">二手房交易</span>
                                    <span className="right">></span>
                                </li>
                                <li className="white">  </li>
                                <li className="clear">
                                    <span className="left">投诉</span>
                                    <span className="right">></span>
                                </li>
                            </ul>
                        </div>
                    )} />  
                    <Route path="/yezhu/index/steward/serves" component={YezhuServes}/>
                    <Route path="/yezhu/index/steward/baoxiu" component={Yezhubaoxiu}/>
                </div>
            </Router>
        )
    }
}

export default Yezhusteward;