import React, { Component } from 'react';
import './../css/Alert.css';
import $ from 'jquery';


class Alert extends Component {
	componentDidMount(){
		$(".mask .alert span").click(function () {
			$(".mask").fadeOut()
		})
	}
	render(){
		return (
			<div className="mask">
				<div className="alert">
					<p>{this.props.data}</p>
					<span>确定</span>
				</div>
			</div>
		)
	}
}

export default Alert;