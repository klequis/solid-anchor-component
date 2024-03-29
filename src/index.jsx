/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Router, Route } from '@solidjs/router'
import Home from './pages/Home';
import User from './pages/User'

const root = document.getElementById('root');

render(
  () =>
    <Router root={App}>
      <Route path="/" component={Home} />    // added line
      <Route path="/user" component={User} />
    </Router>, root
)
