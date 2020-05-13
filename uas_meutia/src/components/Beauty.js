import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import logo from "../img4.jpg";
import text from "../img5.jpg";
import L1 from "../L1.jpg";
import L2 from "../L2.jpg"; 
import L3 from "../L3.jpg";
import L4 from "../L4.jpg"; 
import L5 from "../L5.jpg";

class Beauty extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError, isAuthenticated } = this.props;
    return (
      
      
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" class="text-danger" href="#">VICTORIA'S SECRET</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/login">Login</a>
                <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active" href="/beauty">Beauty</a>
                <a className="nav-item nav-link active" href="/accessories">Accessories</a>
                <a className="nav-item nav-link active" href="/ListProduk">ListProduk</a>
                <a className="nav-item nav-link active" href="/login">Logout</a>
                

              </div>
            </div>
          </nav>
          <div className="container" style={{ marginTop: "80px" }} ></div>
          <center>
          <img className="img-catalog" src={logo} alt="Card cap" />
        </center>
        <br></br>
        <center>
          <img className="img-top" src={text} alt="Card cap" />
        </center>
        <br></br>
          <center>
          <img className="img-top" src={L1} alt="Card cap" />
        </center>
          <br></br>
        <center>
          <img className="img-top" src={L2} alt="Card cap" />
        </center>
        <br></br>
        <center>
          <img className="img-top" src={L3} alt="Card cap" />
        </center>
        <br></br>
        <center>
          <img className="img-top" src={L4} alt="Card cap" />
        </center>
        <br></br>
        <center>
          <img className="img-top" src={L5} alt="Card cap" />
        </center>
        <div>
          
        </div>
        <h1>Enjoy your day!</h1>
        {isAuthenticated && <p>Selamat! Anda Berhasil Login di Victoria's Secret</p>}
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(Beauty);