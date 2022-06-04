import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import pongImg from './img/pong.png'
import './style/App.scss'
import { useRef, useEffect } from 'react'


function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  let collection = {
    homeRef,
    aboutRef
  }

  let projectsList = [
    {
        name: 'Pong Game',
        img: pongImg,
        description: 'This is one of my first projects ever. Even though it\' very simple, it marks the first computer games I create ever',
        id: 1,
        state: 'active'
    },
    {
        name: 'Pong Game',
        img: pongImg,
        description: 'This is one of my first projects ever. Even though it\' very simple, it marks the first computer games I create ever',
        id: 2,
        state: 'after-active'
    },
    {
        name: 'Pong Game',
        img: pongImg,
        description: 'This is one of my first projects ever. Even though it\' very simple, it marks the first computer games I create ever',
        id: 3,
        state: 'after-active'
    }
]

  let refCollection = {
    'home': homeRef,
    'about': aboutRef,
    'projects': projectsRef,
    'contact': contactRef
  }

  const handleClickScroll = (name) => {
    refCollection[name].current.scrollIntoView({
      behavior: 'smooth',
      block: "start", 
      inline: "nearest"
    });
  }

  const handleReveal = (e) => {
    for (let i in collection) {
      let windowHeight = window.innerHeight;
      let elementTop = collection[i].current.getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        collection[i].current.classList.add("active");
      } else {
        collection[i].current.classList.remove("active");
      }
    }
  }
  useEffect(() =>{
    window.addEventListener('scroll', handleReveal)
  })

  return (
      <div>  
        <Header clickFunction={handleClickScroll} />
        <Home clickFunction={handleClickScroll} ref={homeRef}/>
        <About ref={aboutRef} />
        <Projects projectsList={projectsList} ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </div>
  );

  
}
export default App;
