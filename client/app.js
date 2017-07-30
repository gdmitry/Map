import ReactDOM from "react-dom";
import React from "react";
import { HashRouter, Link } from 'react-router-dom';
import Routers from './src/routers';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/auth'>Home</Link></li>
      </ul>
    </nav>
  </header>
);

const Content = () => (
  <main>
    <Routers />
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