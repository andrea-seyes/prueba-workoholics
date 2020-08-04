import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import Signin from './Componentes/Sign-in';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>

        <Route exact path="/">
        <Header />
        <Home />
        <Footer />
        </Route>

        <Route path="/login">
        <Header />
        <Signin />
        <Footer />
        </Route>

      </BrowserRouter>
    </>

  );
}

export default App;