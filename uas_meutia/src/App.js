import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import { IndexRoute } from "react-router";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Beauty from "./components/Beauty";
import Accessories from "./components/Accessories";
import ListProduk from "./components/ListProduk/Home";



function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/beauty" component={Beauty} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/ListProduk" component={ListProduk} />
      
    </Switch>
    
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);