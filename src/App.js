import React,{Component} from 'react';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//import {Container,Navbar,Nav} from 'react-bootstrap'
import 'materialize-css';
//import { Footer} from 'react-materialize';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Footer from './components/Footer'
//import Footer2 from './components/Footer2'

import Footer from './components/Footer'
import Navigation from './components/Navigation'



class App extends Component {


  render() {
    return (
      <div className="App">
        
        <Navigation /> 
        <Footer />
        
      </div>
    );
  }
}

export default App;
