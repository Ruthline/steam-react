import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Hazparte from './pages/hazparte/Hazparte';
import Ferias from './pages/ferias/Ferias';
import Steam from './pages/steam/Steam';
import Login from './pages/login/Login';
import MasInfo from './pages/masinfo/MasInfo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/steam-react' element={<Home/>}></Route>
    <Route path='/home' element={<Navigate replace to={"/steam-react"}/>}></Route>
    <Route path='haz-parte' element={<Hazparte/>}></Route>
    <Route path='/ferias' element={<Ferias/>}></Route>
    <Route path='/steam' element={<Steam/>}></Route>
    <Route path='/profesores' element={<Login/>}></Route>
    <Route path='/estudiantes' element={<Login/>}></Route>
    <Route path='/mas-info' element={<MasInfo/>}></Route>
    
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

