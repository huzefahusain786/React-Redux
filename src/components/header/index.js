import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="#" className="logo" >
          <img src={logo} alt="boutiqaat" />
          </a>
        </header>
        <div>{this.props.celebrityName}</div>
      </div>
    );
  }
}

export default Header;
