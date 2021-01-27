
import './App.css';
import './assets/output.css'
import Header from './Header';
import Home from './Home/Home';
import grey from "./video/grey.mp4"
import {Switch,Route,  useLocation} from "react-router-dom"
import About from './About/About';
import Skills from './Skills/Skills';

import Project from './Projects/Project';
import { AnimatePresence } from 'framer-motion';
import ProjectList from './Project-list/ProjectList';
import More from './More';

function App() {
  const location = useLocation();
  return (
    <div className="w-full h-screen ">

       <video style={{position:'absolute',
    width:'100%',
    left:'50%',
    top:'50%',
    height:'100%',
    objectFit:'cover',
    transform:'translate(-50%, -50%',
    zIndex:'-1'}} autoPlay loop muted>
        <source src={grey} type="video/mp4"/>
      </video>   
     
      <AnimatePresence exitBeforeEnter>

      <Switch location={location} key={location.key}>

<Route path="/about">
<Header/>
<About/>
</Route>

<Route path="/list">

<ProjectList/>
</Route>

<Route path="/list-2">

<More/>
</Route>

<Route path="/skills">
<Header/>
<Skills/>
</Route>

<Route path="/projects">
<Header/>
<Project/>
</Route>

        <Route path="/">
        <Header/>
    <Home/>
    </Route>
    </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;
