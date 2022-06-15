import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Hazparte from './pages/hazparte/Hazparte';
import Ferias from './pages/ferias/Ferias';
import Steam from './pages/steam/Steam';
import LoginS from './pages/login/students/LoginS';
import LoginT from './pages/login/teacher/LoginT';
import MasInfo from './pages/masinfo/MasInfo';
import Error404 from './pages/login/Error404';

import Dashboard from './pages/login/Dashboard';
import Calendar2 from './pages/login/Calen';
import Courses from './pages/login/Courses';
import Arte from './pages/login/courses/CourseArt';
import Ciencia from './pages/login/courses/CourseSci';
import Matematicas from './pages/login/courses/CourseMath';
import Ingenieria  from './pages/login/courses/CourseInge';
import Tecnologia from './pages/login/courses/CourseTech';
import Recursos from './pages/login/Recursos';
import ScoreS from './pages/login/students/ScoreStudents';
import ArteRec from './pages/login/resources/ArteRec';
import ScoreT from './pages/login/teacher/scoreTeacher'
import FormScore from './Components/scoreT/FormScore'
import ListaWork from './Components/scoreT/ListaWork'


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
    <Route path='*' element={<Error404 />}></Route>

    <Route path='/profesores' element={<LoginT />}></Route>
    <Route path='/estudiantes' element={<LoginS />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/calendar' element={<Calendar2 />}></Route>
    <Route path='/courses' element={<Courses />}></Route>
    <Route path='/courses/1' element={<Arte />}></Route>
    <Route path='/courses/2' element={<Ciencia />}></Route>
    <Route path='/courses/3' element={<Matematicas />}></Route>
    <Route path='/courses/4' element={<Ingenieria />}></Route>
    <Route path='/courses/5' element={<Tecnologia />}></Route>
    <Route path='/scorestudents' element={<ScoreS />}></Route>
    <Route path='/scoreTeacher/' element={<ScoreT />}></Route>
    <Route path='/scoreTeacher/form' element={<FormScore />}></Route>
    <Route path='/scoreTeacher/editar' element={<ListaWork />}></Route>

    <Route path='/resources' element={<ArteRec/>}></Route>
  </Routes>
  </BrowserRouter>
);


