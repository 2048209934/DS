import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const OldMenuLink = ({ label, to, activeOnlyWhenExact, img1, img2 }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to} className={match ? 'active' : ''}>
    	<p className="admin_one" id="admin_one"><img src={img1} alt=""/></p>
      <p className="admin_two" id="admin_two"><img src={img2} alt=""/></p>
      <p>{label}</p>   	
    </Link>
  )}/>
)

export default OldMenuLink;