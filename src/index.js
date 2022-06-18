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
import ArteScoreT from './pages/login/students/score/ArteScore'
import CienciaScoreT from './pages/login/students/score/CienciaScore'
import MatesScoreT from './pages/login/students/score/MatesScore'
import IngeScoreT from './pages/login/students/score/IngeScore'
import TechScoreT from './pages/login/students/score/IngeScore'


import ArteRec from './pages/login/resources/ArteRec';

import CoursesT from './pages/login/teacher/coursesTe/CoursesT';
import DashboardT from './pages/login/teacher/DashboardT';
import ArteT from './pages/login/teacher/coursesTe/CourseArtT';
import CienciaT from './pages/login/teacher/coursesTe/CourseSciT'
import MatematicasT from './pages/login/teacher/coursesTe/CourseMathT'
import TechT from './pages/login/teacher/coursesTe/CourseTechT'
import IngenieriaT from './pages/login/teacher/coursesTe/CourseIngeT'

import Notas5 from './pages/login/teacher/scoreCrud/notas5A'
import Notas5C from './pages/login/teacher/scoreCrud/notas5C'
import Notas5M from './pages/login/teacher/scoreCrud/notas5M'
import Notas5I from './pages/login/teacher/scoreCrud/notas5I'
import Notas5T from './pages/login/teacher/scoreCrud/notas5T'

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
    <Route path='/courses/1/notasarte' element={<ArteScoreT />}></Route>
    <Route path='/courses/2' element={<Ciencia />}></Route>
    <Route path='/courses/2/notasciencia' element={<CienciaScoreT />}></Route>
    <Route path='/courses/3' element={<Matematicas />}></Route>
    <Route path='/courses/3/notasmates' element={<MatesScoreT />}></Route>
    <Route path='/courses/4' element={<Ingenieria />}></Route>
    <Route path='/courses/4/notasinge' element={<IngeScoreT />}></Route>
    <Route path='/courses/5' element={<Tecnologia />}></Route>
    <Route path='/courses/5/notastech' element={<TechScoreT />}></Route>


    <Route path='/profesores' element={<LoginT />}></Route>
    <Route path='/dashboardTeacher' element={<DashboardT />}></Route>
    <Route path='/calendarTeacher' element={<CalendarT />}></Route>

    <Route path='/coursesTeacher/' element={<CoursesT />}></Route>
    <Route path='/coursesTeacher/1' element={<ArteT />}></Route>
    <Route path='/coursesTeacher/2' element={<CienciaT />}></Route>
    <Route path='/coursesTeacher/3' element={<MatematicasT />}></Route>
    <Route path='/coursesTeacher/4' element={<IngenieriaT />}></Route>
    <Route path='/coursesTeacher/5' element={<TechT />}></Route>
    <Route path='/coursesTeacher/1/notas5' element={<Notas5 />}></Route>
    <Route path='/coursesTeacher/2/notas5' element={<Notas5C />}></Route>
    <Route path='/coursesTeacher/3/notas5' element={<Notas5M />}></Route>
    <Route path='/coursesTeacher/4/notas5' element={<Notas5I />}></Route>
    <Route path='/coursesTeacher/5/notas5' element={<Notas5T />}></Route>
    

    <Route path='/resources' element={<ArteRec/>}></Route>
  </Routes>
  </BrowserRouter>
);


