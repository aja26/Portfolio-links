import { Link } from "react-router-dom";

export default function Navbar(){

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
        </nav>
        
    )
    
}