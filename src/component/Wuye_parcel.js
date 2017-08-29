import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class WuyeParcel extends Component {
    ok=function(){
        window.history.go(-1)
    }
    render() {
        return (
    	    <div>
    	  	    <div className="notice_editor">
                    <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                    <span>邮包</span>
                </div>
                <p className="add_parcel clear">
                    <img className="left" src="../../../images/addition.png" alt="" />
                    <span className="left">添加邮包</span>
                </p>
                <p className="all_parcel clear">
                    <img className="left" src="../../../images/manage1.png" alt="" />
                    <span className="left">所有邮包</span>
                </p>
                <div className="parcels">
                    <div className="user_message">
                        <p>收件人：郭浩静</p>
                        <p>电话：13245698123</p>
                        <p>收货地址：北京大兴区生物医药基地天宫院大兴二职</p>
                        <p>快递名称：圆通快递</p>
                        <p>收货时间：2017/8/23</p>
                        <p>是否收货：是</p>
                    </div>
                    <div className="user_message">
                        <p>收件人：郭浩静</p>
                        <p>电话：13245698123</p>
                        <p>收货地址：北京大兴区生物医药基地天宫院大兴二职</p>
                        <p>快递名称：圆通快递</p>
                        <p>收货时间：2017/8/23</p>
                        <p>是否收货：是</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WuyeParcel;