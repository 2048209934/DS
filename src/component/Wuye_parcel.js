import React, { Component } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';


class WuyeParcel extends Component {
    componentDidMount(){
        var wuyesj=window.sessionStorage.getItem('wuye');
        var wuyesjjson=JSON.parse(wuyesj);
        this.props.wuye_showpackage(wuyesjjson[0].village);
    }
    ok=function(){
        window.history.go(-1)
    }
    wyxq(){
        $(".add_package").slideDown();
    }
    wysq(){
        var wuyesj=window.sessionStorage.getItem('wuye');
        var wuyesjjson=JSON.parse(wuyesj);
        this.props.wuye_addpackage(this.refs.username.value,wuyesjjson[0].village,this.refs.phone.value,this.refs.delivery.value);
        $(".add_package").slideUp();
        this.refs.username.value='';
        this.refs.phone.value='';
        this.refs.delivery.value='';
    }
    click(id){
        var wuyesj=window.sessionStorage.getItem('wuye');
        var wuyesjjson=JSON.parse(wuyesj);
        this.props.parcel_makesure(id,wuyesjjson[0].village)
    }
    render() {
        return (
    	    <div>
    	  	    <div className="notice_editor">
                    <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                    <span>邮包</span>
                </div>
                <p className="add_parcel clear"  onClick={this.wyxq}>
                    <img className="left" src="../../../images/addition.png" alt="" />
                    <span className="left">添加邮包</span>
                </p>

                <div className="add_package">
                    <div>
                        <span>住户姓名</span>
                        <input ref="username" type="text" placeholder="户主姓名" />
                    </div>
                    <div>
                        <span>联系方式</span>
                        <input ref="phone" type="text" placeholder="联系方式" />
                    </div>
                    <div>
                        <span>快递名称</span>
                        <input ref="delivery" type="text" placeholder="快递名称" />
                    </div>
                    <button onClick={this.wysq.bind(this)}>确定</button>
                </div>

                <p className="all_parcel clear">
                    <img className="left" src="../../../images/manage1.png" alt="" />
                    <span className="left">所有邮包</span>
                </p>
                <div className="parcels">
                    {
                        this.props.data.map(function(con,i){
                            return (
                                <div key={i} className="user_message">
                                    <p>收件人：{con.name}</p>
                                    <p>电话：{con.phone}</p>
                                    <p>快递名称：{con.delivery}</p>
                                    <p>收货时间：{con.time.substr(0,19).split("T").join("   ")}</p>
                                    <p className={con.indexs==0?"did":"do"} onClick={this.click.bind(this,con.id)}>{con.indexs==0?"未收货":"已收货"}</p>
                                </div>
                            )
                        }.bind(this))
                    }
                    
                </div>
            </div>
        )
    }
}


export default connect(e=>({data:e.add_wuyepackage}),action)(WuyeParcel);