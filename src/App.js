import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Details from "./components/Details"
import ProductList from "./components/ProductList"
import ProductModal from "./components/Modal"
import Error from "./components/Error"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/cart" component={Cart}/>
       <Route  path="/details" component={Details}/>
       <Route  component={Error}/>
     </Switch>
     <ProductModal />
   </React.Fragment>
  );
}

export default App;
