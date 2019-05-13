import React, { Component } from 'react';
import './FooterCSS.css';


function CustomFooter(props) {
    return (
        <div>
            <h5> @2019</h5>
            <h6>By Vytautas M</h6>
        </div>
    );
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <CustomFooter />
      </div>
    );
  }
}

export default Footer;
