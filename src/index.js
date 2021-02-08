import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Sidebar from "./Components/Sidebar"
import AboutMe from "./Components/AboutMe"
import MySkills from "./Components/MySkills"
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'

ReactDOM.render(
  <React.StrictMode>
    <div id="page-wraper">
      <Sidebar />
      <AboutMe />
      <MySkills />
      <MyWork />
      <Contact />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
