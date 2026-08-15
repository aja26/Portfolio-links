import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar(){

    return (
        <header>
            <nav className="container">
                 <div className="main-menu">
                    <ul>
                        <div className="magnetic">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </div>

                        <div>
                            <li className="magnetic">
                                 <Link to="/about">about</Link>
                            </li>
                        </div>
                         <div>
                            <li className="magnetic">
                                 <Link to="/about">testing</Link>
                            </li>
                        </div>
                        <div>
                            <li className="magnetic">
                                 <Link to="/projects">projects</Link>
                            </li>
                        </div>

                        <div className="magnetic">
                            <li>
                                 <Link to="/contact">contact</Link>
                            </li>
                        </div>
                    
                    </ul>
                    
                 </div>

                  <div className="social-menu">
                    <ul>
                        <div className="magnetic">
                            <li><a target="_blank" href="https://www.linkedin.com/in/adam-alexander-91528337/"><i className="ri-linkedin-box-fill"></i></a></li>
                        </div>
                        <div className="magnetic">
                            <li><a target="_blank" href="https://www.behance.net/AdamJA"><i className="ri-behance-line"></i></a></li>
                        </div>
                    </ul>
                </div>
            </nav>
            
        </header>
    )
}

