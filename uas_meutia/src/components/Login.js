import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions/auth";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import L5 from "../img1.jpg";
import Z from "../HAHA.jpg";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#FFB6C1",
    },
  },
  paper: {
    // marginTop: 100,
    display: "fixed",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057",
  },
  // form: {
  //   marginTop: ,
  // },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center",
  },
});

class Login extends Component {
  state = { email: "", password: "" };
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };
  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(loginUser(email, password));
  };
  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (

        <Container component="main" maxWidth="xs">
           <Typography component="h1" variant="h5">
           <img className="img-top" src={L5} alt="Card cap" />
            </Typography>
            <Typography component="h1" variant="h5">
           <img className="img-top" src={Z} alt="Card cap" />
            </Typography>
            <Typography component="h1" variant="h5">
          <center>40% OFF ACCESSORIES</center>
            </Typography>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                <center>Victoria's Secret</center>
            </Typography>
            <Typography component="h2" variant="h7">
                <center>Login</center>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              fullWidthname="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            {loginError && (
              <Typography component="p" className={classes.errorText}>
                Incorrect email or password.
              </Typography>
            )}
            
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          
          </Paper>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));