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
import Perfil from './pages/login/Perfil';

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
import Ajustes from './pages/login/Ajustes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/steam-react/' element={<Home/>}></Route>
    <Route path='/steam-react/home' element={<Navigate replace to={"/steam-react"}/>}></Route>
    <Route path='/steam-react/haz-parte' element={<Hazparte />}></Route>
    <Route path='/steam-react/ferias' element={<Ferias />}></Route>
    <Route path='/steam-react/steam' element={<Steam />}></Route>
    <Route path='/steam-react/mas-info' element={<MasInfo />}></Route>
    <Route path='*' element={<Error404 />}></Route>
    <Route path='/steam-react/dashboard/perfil' element={<Perfil/>}></Route>
    <Route path='/steam-react/dashboard/ajustes' element={<Ajustes/>}></Route>
steam-react/
    <Route path='/steam-react/estudiantes' element={<LoginS />}></Route>
    <Route path='/steam-react/dashboard' element={<Dashboard />}></Route>
    <Route path='/steam-react/calendar' element={<Calendar2 />}></Route>
    <Route path='/steam-react/courses' element={<Courses />}></Route>
    <Route path='/steam-react/courses/1' element={<Arte />}></Route>
    <Route path='/steam-react/courses/1/notasarte' element={<ArteScoreT />}></Route>
    <Route path='/steam-react/courses/2' element={<Ciencia />}></Route>
    <Route path='/steam-react/courses/2/notasciencia' element={<CienciaScoreT />}></Route>
    <Route path='/steam-react/courses/3' element={<Matematicas />}></Route>
    <Route path='/steam-react/courses/3/notasmates' element={<MatesScoreT />}></Route>
    <Route path='/steam-react/courses/4' element={<Ingenieria />}></Route>
    <Route path='/steam-react/courses/4/notasinge' element={<IngeScoreT />}></Route>
    <Route path='/steam-react/courses/5' element={<Tecnologia />}></Route>
    <Route path='/steam-react/courses/5/notastech' element={<TechScoreT />}></Route>
steam-react

    <Route path='/steam-react/profesores' element={<LoginT />}></Route>
    <Route path='/steam-react/dashboardTeacher' element={<DashboardT />}></Route>
    <Route path='/steam-react/calendarTeacher' element={<CalendarT />}></Route>
/steam-react
    <Route path='/steam-react/coursesTeacher/' element={<CoursesT />}></Route>
    <Route path='/steam-react/coursesTeacher/1' element={<ArteT />}></Route>
    <Route path='/steam-react/coursesTeacher/2' element={<CienciaT />}></Route>
    <Route path='/steam-react/coursesTeacher/3' element={<MatematicasT />}></Route>
    <Route path='/steam-react/coursesTeacher/4' element={<IngenieriaT />}></Route>
    <Route path='/steam-react/coursesTeacher/5' element={<TechT />}></Route>
    <Route path='/steam-react/coursesTeacher/1/notas5' element={<Notas5 />}></Route>
    <Route path='/steam-react/coursesTeacher/2/notas5' element={<Notas5C />}></Route>
    <Route path='/steam-react/coursesTeacher/3/notas5' element={<Notas5M />}></Route>
    <Route path='/steam-react/coursesTeacher/4/notas5' element={<Notas5I />}></Route>
    <Route path='/steam-react/coursesTeacher/5/notas5' element={<Notas5T />}></Route>
    /steam-react
/steam-react
    <Route path='/resources' element={<ArteRec/>}></Route>
  </Routes>
  </BrowserRouter>
);


