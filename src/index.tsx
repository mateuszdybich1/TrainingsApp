import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './Dashboard/Dashboard';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import AddCourse from './AddCourse/AddCourse';
import MyCourses from './MyCourses/MyCourses';
import SignToCourse from './SignToCourse/SignToCourse';
import { AuthProvider } from './AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route key="mainPage" path='/' element={<MainPage/>}/>
        <Route key="signUn" path='/signup' element={<SignUp/>}/>
        <Route key="signIn" path='/signin' element={<SignIn/>}/>
        <Route key="addCourse" path='/addcourse' element={<AddCourse/>}/>
        <Route key="mycourses" path='/mycourses' element={<MyCourses/>}/>
        <Route key="signtocourse" path='/signtocourse' element={<SignToCourse/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
