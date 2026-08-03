import { Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";

import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Projects from "./src/pages/Projects";
import Contact from "./src/pages/Contact";

export default function App(){
    return(
        <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>

        
    )
}