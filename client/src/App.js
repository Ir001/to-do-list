import  {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Register from './components/auth/register';
import Login from './components/auth/login'
import Dashboards from './components/dashboards/dashboards'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Dashboards/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
