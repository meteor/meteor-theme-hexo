import React, { Component } from 'react';
import styled from 'react-emotion';

const NavLink = styled('a')`
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 70px;
  padding: 10px 0;
  background-color: #1d127d;
  color: #fff;
`;

export default class Nav extends Component {
  render() {
    return (
	  <NavLink href="https://apollographql.com" target="_blank">
		<span>Engine</span>
	  </NavLink>
    );
  }
}
