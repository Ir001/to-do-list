import  {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './dist/css/main.css';
import './dist/css/fonts.css';
import Register from './components/auth/register';
import Login from './components/auth/login'
import Dashboards from './components/dashboards/dashboards'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboards/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
