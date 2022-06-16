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

import Dashboard from './pages/login/students/Dashboard';
import Calendar2 from './pages/login/students/Calen';
import CalendarT from './pages/login/teacher/CalenT';
import Courses from './pages/login/students/Courses';
import Arte from './pages/login/courses/CourseArt';
import Ciencia from './pages/login/courses/CourseSci';
import Matematicas from './pages/login/courses/CourseMath';
import Ingenieria  from './pages/login/courses/CourseInge';
import Tecnologia from './pages/login/courses/CourseTech';

import ScoreS from './pages/login/students/ScoreStudents';
import ArteRec from './pages/login/resources/ArteRec';
import ScoreT from './pages/login/teacher/scoreTeacher'
import ListaWork from './Components/scoreT/ListaWork'
import CoursesT from './pages/login/teacher/coursesTe/CoursesT';
import DashboardT from './pages/login/teacher/DashboardT';
import ArteT from './pages/login/teacher/coursesTe/CourseArtT';
import FormArte from './pages/login/teacher/coursesTe/FormArte';


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
    


    <Route path='/profesores' element={<LoginT />}></Route>
    <Route path='/dashboardTeacher' element={<DashboardT />}></Route>
    <Route path='/calendarTeacher' element={<CalendarT />}></Route>
    <Route path='/scoreTeacher/' element={<ScoreT />}></Route>
    <Route path='/scoreTeacher/editar' element={<ListaWork />}></Route>
    <Route path='/coursesTeacher/' element={<CoursesT />}></Route>
    <Route path='/coursesTeacher/1/' element={<ArteT />}></Route>
    <Route path='/scoreTeacher/1/form' element={<FormArte/>}></Route>
    <Route path='/coursesTeacher/2' element={<Ciencia />}></Route>
    <Route path='/coursesTeacher/3' element={<Matematicas />}></Route>
    <Route path='/coursesTeacher/4' element={<Ingenieria />}></Route>
    <Route path='/coursesTeacher/5' element={<Tecnologia />}></Route>
    <Route path='/scorestudents' element={<ScoreS />}></Route>
    

    <Route path='/resources' element={<ArteRec/>}></Route>
  </Routes>
  </BrowserRouter>
);


