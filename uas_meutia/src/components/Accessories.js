import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import s1 from "../S1.jpg"; 
import s2 from "../S2.jpg";
import s3 from "../S3.jpg";
import dis from "../img9.jpg";
import logo from "../img4.jpg";

class Accessories extends Component {
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
          <img className="img-top" src={dis} alt="Card cap" />
        </center>
        <br></br>
          <center>
          <img className="img-top" src={s1} alt="Card cap" />
        </center>
          <br></br>
        <center>
          <img className="img-top" src={s2} alt="Card cap" />
        </center>
        <br></br>
        <center>
          <img className="img-top" src={s3} alt="Card cap" />
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
    logoutError: state.auth.Error,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(Accessories);