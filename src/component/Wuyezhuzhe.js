import React, { Component } from 'react';
import  WuyeParcel from './Wuye_parcel';
import  WuyeGuarantee from './Wuye_guarantee';
import  WuyeNotice from './Wuye_notice';
import  WuyeOrganize from './Wuye_organize';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuyezhuzhe extends Component {
  render() {
    return (
      <Router>
    	  <div className="property">
              <div className="property_con">
                  <Route exact path='/wuye/index' render={() => (
                      <div>
                          <div className="banner">
                                 <img src="../images/banner_one.jpg" alt=""/>
                              <div className="banner_box">
                                  <span className="banner_word">北京爱这城D-shen</span>
                                  <span className="banner_news"><img src="../images/xiaoxi.png" alt=""/></span>
                              </div>
                          </div>
                          <div className="property_manage">
                              <Link to="/wuye/index/organize" className="life">
                                    <div className="organize_left">
                                        <p className="one">组织活动</p>
                                        <p className="two">一起寻快乐</p>
                                    </div>
                                    <div className="organize_right"><img src="../images/life.png" alt=""/></div>
                              </Link>
                              <Link to="/wuye/index/notice" className="phone">
                                    <div className="organize_left">
                                        <p className="one">通知</p>
                                        <p className="two">接收更方便</p>
                                    </div>
                                    <div className="organize_right"><img src="../images/phone.png" alt=""/></div>
                              </Link>
                              <Link to="/wuye/index/parcel" className="parcel">  
                                  <div className="organize_left">
                                        <p className="one">邮包</p>
                                        <p className="two">收发更快捷</p>
                                  </div>
                                  <div className="organize_right"><img src="../images/parcel.png" alt=""/></div>
                              </Link>                                                       
                              <Link to="/wuye/index/guarantee" className="manage">
                                  <div className="organize_left">
                                        <p className="one">保修</p>
                                        <p className="two">修复更快速</p>
                                  </div>
                                  <div className="organize_right"><img src="../images/manage.png" alt=""/></div>
                              </Link>
                          </div>
                          <p className="fresh">社区新鲜事</p>
                          {/*content*/}
                          <div className="content">
                              <div className="box">
                                  <p className="name clear">
                                      <img className="left" src="../images/guanjia_03.jpg" alt="" />
                                      <span className="left">白桐</span>
                                      <span className="left">在</span>
                                      <span className="left">邻里分享</span>
                                  </p>
                                  <p>2017年8月20日</p>
                                  <p>星期日</p>
                                  <p>今日限行</p>
                                  <p>[  今夜山区有雨 注意防范  ]今天白天阴转多云，早晨有轻雾并有分散小阵雨，最高气温30℃；夜间多云间阴，山区有阵雨或雷阵雨，最低气温23℃，受轻雾影响，今晨能见度不...</p>
                                  <img className="prompt" src="../images/prompt_03.jpg" alt="" />
                                  <div className="timess">23小时前</div>
                              </div>
                          </div>
                        </div>
                     )} />  
                  <Route path="/wuye/index/parcel" component={WuyeParcel}/>
                  <Route path="/wuye/index/notice" component={WuyeNotice}/>
                  <Route path="/wuye/index/organize" component={WuyeOrganize}/>
                  <Route path="/wuye/index/guarantee" component={WuyeGuarantee}/>
              </div>
        </div>
        </Router>
    );
  }
}

export default Wuyezhuzhe;