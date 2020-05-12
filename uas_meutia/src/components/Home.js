import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import gambar1 from "../img1.jpg";
import gambar2 from "../img2.jpg";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      
      
      <div className="container" style={{ marginTop: "80px" }}>
        
        <center>
          <img className="img-catalog" src={gambar1} alt="Card cap" />
        </center>
        <center>
          <img className="img-catalog" src={gambar2} alt="Card cap" />
        </center>
        <div>
          
        </div>
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
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
  };
}
export default connect(mapStateToProps)(Home);