import ReactDOM from "react-dom";
import React from "react";
import { About } from "./pages/About";
import { Main } from "./pages/Main";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  (<BrowserRouter>
	 <Switch>
			<Route path='/' component={Main}/>
			<Route path='/about' component={About}/>
		
  	 </Switch>
  </BrowserRouter>),
  document.getElementById("container")
);

// Nice to refer https://webpack.js.org/guides/development/
// https://www.theodo.fr/blog/2016/07/a-comprehensive-introduction-to-webpack-the-module-bundler/