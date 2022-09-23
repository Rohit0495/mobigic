import React, {useState} from 'react'
import LogIn from './Components/LogIn';
import { SignIn } from './Components/SignIn';
import UploadFiles from './Components/UploadFiles';
// import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    // <div classNameName="App">
    //   <UploadFiles />
    //   <Login />
    //   <SignIn />
    // </div>
    <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <LogIn /> } />
          <Route path="/signin" element={ <SignIn /> } />
          <Route path="/upload" element={ <UploadFiles /> } />
      </Routes>
    </BrowserRouter>
    {/* <SignIn /> */}
    {/* <Login /> */}
    {/* <UploadFiles /> */}
    </div>
  );
}

export default App;