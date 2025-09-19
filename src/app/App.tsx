
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Header from "../layouts/Header";
import LoginDemo from "../components/shared/LoginDemo";


import Exam1 from "../components/shared/Exam1";

function App() {
  return (
        // <BrowserRouter>
        //     <Header/>
        //     <Routes>
        //         <Route path="/home" element={<Home/>}/>
        //         <Route path="/about" element={<About/>}/>
        //         <Route path="/contact" element={<Contact/>}/>
        //         <Route path="/login" element={<LoginDemo/>}/>
        //     </Routes>
            
        // </BrowserRouter>
        <Exam1/>
  );
}

export default App;
