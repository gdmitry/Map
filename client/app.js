import ReactDOM from "react-dom";
import React from "react";
import { HashRouter, Link } from 'react-router-dom';
import Routers from './src/routers';
import { Header } from './src/components/Header';

ReactDOM.render(
  <HashRouter>
    <div>
      <Header/>
      <main>
    	<Routers />
  	</main>
    </div>
  </HashRouter>,
  document.getElementById("container"));

  require('./src/redux.js');