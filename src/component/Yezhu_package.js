import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import $ from 'jquery'
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
                <img className="YB" src="../../images/youbao_img.png" alt="" />
                <p className="nows">您现在有<span>{this.props.data.length}</span>个包裹噢~</p>
            </div>
        )
    }
}

export default connect(e=>({data:e.a}),action)(YezhuPackage);