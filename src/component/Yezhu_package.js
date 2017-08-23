import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import $ from 'jquery'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class YezhuPackage extends Component {
	componentDidMount(){
		$(".admin_con").hide()
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
                <p className="nows">您现在有<span>0</span>个包裹噢~</p>
            </div>
        )
    }
}

export default YezhuPackage;