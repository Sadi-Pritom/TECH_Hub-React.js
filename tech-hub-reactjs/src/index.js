import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//npm install react-router-dom
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Event from './Event';
import Posts from './Posts';
import Login from './Login';
import Register from './Register';
import Barchart from './Barchart';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <Header></Header>
      <Routes>
        {/* <Route path="/" element={<App/>}></Route> */}
        {/* <Route path="/" element={<App/>}></Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/event" element={<Event/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/add" element={<Register/>}></Route>
        <Route path="/app" element={<App/>}></Route>
        <Route path="/barchart" element={<Barchart/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
