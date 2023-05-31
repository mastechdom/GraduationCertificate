import './App.css';
import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import certiImage from './certificalte.jpeg'
import logo from './Saarthi-blue.png'

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "Mas",
    MotherName: "Arya Stark",
    TokenNo: "2P114",
    RMcode: "2R3",
    RmName: "Lynister",
    startDate: "12-22-2022",
    endDate: "12-28-2023",
    modal: false,
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p id='logo'><img src={logo} alt='logo' /></p>
            <p id='companyName'>Certificate of Graduation <br /> Saarthi Education <br /> A Non Profit Organisation</p>
            <p id='matter'>This is to certify that <span>{this.state.Name}</span>, son of Ms. <span>{this.state.MotherName} ({this.state.TokenNo})</span> has
              successfully graduated Saarthi Arithmetic Programme under
              the guidance of Ms. <span>{this.state.RmName} ({this.state.RMcode})</span>. {this.state.Name} started on <span>{this.state.startDate}</span> and ended his/her journey with us on <span>{this.state.endDate}</span>. Hence, is hereby
              awarded the certificate in recognition of remarkable dedication,
              hard work and commitment to excellence.</p>
            <p id='sign'>Operations Manager <br />Saarthi Education</p>
            <img src={certiImage} alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

