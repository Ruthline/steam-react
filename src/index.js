import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Hazparte from './pages/hazparte/Hazparte';
import Ferias from './pages/ferias/Ferias';
import Steam from './pages/steam/Steam';
import Login from './pages/login/Login';
import MasInfo from './pages/masinfo/MasInfo';

import Dashboard from './pages/login/Dashboard';
import Calendar2 from './pages/login/Calen';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/steam-react' element={<Home/>}></Route>
    <Route path='/home' element={<Navigate replace to={"/steam-react"}/>}></Route>
    <Route path='haz-parte' element={<Hazparte />}></Route>
    <Route path='/ferias' element={<Ferias />}></Route>
    <Route path='/steam' element={<Steam />}></Route>
    <Route path='/mas-info' element={<MasInfo />}></Route>

    <Route path='/profesores' element={<Login />}></Route>
    <Route path='/estudiantes' element={<Login />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/calendar' element={<Calendar2 />}></Route>
  </Routes>
  </BrowserRouter>
);


