import ReactDOM from "react-dom";
import React from "react";
import { About } from "./pages/About";
import { Main } from "./pages/Main";
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => (
 <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Roster</Link></li>
        <li><Link to='/auth'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
);

const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

ReactDOM.render(  
<HashRouter>
  	<div>
		<Header />
		<Content />
  	</div>
</HashRouter>,
  document.getElementById("container")
);

// Nice to refer https://webpack.js.org/guides/development/
// https://www.theodo.fr/blog/2016/07/a-comprehensive-introduction-to-webpack-the-module-bundler/