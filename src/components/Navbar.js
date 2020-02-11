import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <div className="navbar-text">Welcome, Murad</div> */}
        <div className="login">Login</div>
        <div className="other-text">View Raw Dataset</div>
        <div className="banner-text">Executive Dashboard - FY 2019 Q3-Q4</div>
      </div>
    );
  }
}

export default Navbar;
