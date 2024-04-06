import React from 'react'
import { Homecomponent } from './Component/home';
import { Aboutcomponent } from './Component/about';

import { Footercomponent } from './Component/footer';
import { NavbarComponent } from './Component/navbar';
import Projects from './Component/projects';
import Contact2 from './Component/contact2';






const App = () => {
  return (
    <div>     
    <NavbarComponent/>

    <Homecomponent/>
    <Aboutcomponent/>
    <Projects/>
    
    <Contact2/>

    <Footercomponent/>
    </div>
  )
}

export default App