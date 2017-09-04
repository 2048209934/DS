import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import * as action from './../action/action'
import {connect} from 'react-redux';

class YezhuPackage extends Component {
	componentDidMount(){
		$(".admin_con").hide()
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        console.log(yezhusjjson)
        this.props.yezhu_spackage(yezhusjjson[0].family,yezhusjjson[0].address);
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <div className="package_head">
                    <img className="back" src="../../images/arrow.png" onClick={this.fn} alt="" />
                    邮包
                </div>
                <p className="nows">您现在有<span> {this.props.data.length} </span>个包裹噢~</p>
                
                <div className="parcels">
                    {
                        this.props.data.map(function(con,i){
                            return (
                                <div key={i} className="user_message">
                                    <p>收件人：{con.name}</p>
                                    <p>电话：{con.phone}</p>
                                    <p>快递名称：{con.delivery}</p>
                                    <p>收货时间：{con.time.substr(0,19).split("T").join("   ")}</p>
                                    
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default connect(e=>({data:e.a}),action)(YezhuPackage);