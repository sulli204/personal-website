import React, { useRef } from 'react';

import Sidebar from "./Components/Sidebar"
import AboutMe from "./Components/AboutMe"
import MySkills from "./Components/MySkills"
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'

function App() {
  return (
    <div id="page-wraper">
      <Sidebar />
      <AboutMe />
      <MySkills />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
