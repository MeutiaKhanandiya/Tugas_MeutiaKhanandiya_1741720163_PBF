import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import gambar4 from './2.jpg';
import gambar5 from './3.jpg';
import gambar1 from './4.jpg';
import gambar2 from './5.jpg';
import gambar3 from './6.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



export default function AuthExample(){
  return(
    <Router>
      <div>
      
        
   
      <AuthButton />
             <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">SEPHORA</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav">
       <a class="nav-item nav-link active" href="/public">Home <span class="sr-only">(current)</span></a>
       <a class="nav-item nav-link active" href="/login">Category</a>
     </div>
   </div>
 </nav></div>
      {/* <ul>
          <li>
            <Link to = "/public">Public page</Link>
          </li>
          <li>
            <Link to = "/private">Private page</Link>
          </li>
        </ul> */}
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
          <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth ={
  isAuthenticated: false,
  Authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Terimakasih telah membeli{""}
      <button onClick={() =>{fakeAuth.signout(() => history.push("/public"));}}>Back To Home</button>
      </p>
  ) : (
    <p>
      
    </p>
  );
}


function PrivateRoute({children, ...rest}){
  return(
    <Route
    {...rest}
    render={({location}) =>
      fakeAuth.isAuthenticated ? (
        children
      ): (
        <Redirect
        to ={{
          pathname: "/login",
          state: {from: location}
        }}
        />
      )
    }
    />
  );
}

function PublicPage(){
  return   <div class="card text-center">
  <div class="card-header">
  SEPHORA
  </div>
  <div class="card-body">
 
   <h5 class="card-title">About Sephora</h5>
     {/* <img src={gambar}/> */}
    <p class="card-text">Sephora is a visionary beauty-retail concept founded in France by Dominique Mandonnaud in 1970. Sephora's unique, open-sell environment features an ever-increasing amount of classic and emerging brands across a broad range of product categories including skincare, makeup, fragrance, body and hair care, in addition to Sephora's own private label. </p>
    <p class="card-text"> Today, Sephora is not only the leading chain of perfume and cosmetics stores in France, but also a powerful beauty presence in countries around the world.</p>
    <p class="card-text">Owned by LVMH Moët Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora is highly regarded as a beauty trailblazer, thanks to its unparalleled assortment of prestige products, unbiased service from experts, interactive shopping environment, disruptive spirit and constant innovation.</p>
    <p class="card-text">Sephora operates approximately 1,900 stores in 29 countries worldwide, with an expanding base of over 200 stores across the Asia Pacific region including Australia, China, Singapore, Malaysia, Thailand, Indonesia and India.</p>
  </div>
</div>;
}
function ProtectedPage(){
  return <h3>Private</h3>;
}
function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  let {from} = location.state || { from: {pathname: "/"}};
  let login = () => {
    fakeAuth.Authenticate(() => {
      history.replace(from);
    });
  };
return (
    <div class="card-deck">
  <div class="card">
  <img class="card-img-top" src={gambar1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">BENEFIT COSMETIC</h5>
      <p class="card-text">Best Popular cosmetics</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
   </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Mario Badescu</h5>
      <p class="card-text">A soothing, antioxidant-infused facial mist.</p>
    </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={gambar3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Caudalie</h5>
      <p class="card-text">A gentle exfoliating cream that works overnight to visibly smooth lines and reduce the appearance of pores.</p> 
      </div>
    <div class="card-footer">
    <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
    </div>
  
</div>
  </div>
);
}
function App() {
  return (
    <Router>
      <div>
        <div className="nav">
        <ul>
          <li><Link to="/beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/produk">Product</Link>
          </li>
          <li>
            <Link to="/profil">Profile</Link>
          </li>
          <AuthButton/>
        </ul>

        <Switch>
          <Route path="/beranda">
            <BerandaPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/produk">
            <ProtectedPage/>
          </PrivateRoute>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
function BerandaPage(){
  return (
    <div>
      <br/>
      <h1 align="center">SEPHORA</h1>
      <p align="center">Ekspresikan Dirimu menggunakan Produk Kami</p>
    </div>
  );
  }