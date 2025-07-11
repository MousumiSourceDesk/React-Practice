import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form/Form.jsx';
import Header from './components/Header'
import Accor from './components/Accor'
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from './components/Clock/Clock.jsx';

const App = () => {
  

  const [mode, setMode] = useState("light");
  const [modeIcon, setModeIcon] = useState("pi pi-sun");
  const toggleMode = () => {
    if (mode === "light") {
      setModeIcon("pi pi-moon");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setModeIcon("pi pi-sun");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div id='root'>
      <Header mode={mode} modeIcon={modeIcon} toggleMode={toggleMode} />
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home mode={mode} />} />
            <Route path='/Accor' element={<Accor mode={mode} />} />
            <Route path='/Form' element={<Form mode={mode} />} />
            <Route path='/Clock' element={<Clock mode={mode} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer mode={mode} />
    </div>
  )
}

export default App
