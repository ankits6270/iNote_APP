
import './App.css';
import Navbar from './component/Navbar';
import { Home } from './component/Home';
import About from './component/About';
import NoteState from './context/notes/NoteState';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from './component/Alert';
import Signup from './component/Signup';
import Login from './component/Login';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login showAlert={showAlert}/>}></Route>
        <Route path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
  </>
  );
}

export default App;
