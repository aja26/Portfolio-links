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
                                 <Link to="/about">About</Link>
                            </li>
                        </div>
                         <div>
                            <li className="magnetic">
                                 <Link to="/testing">Testing</Link>
                            </li>
                        </div>
                        <div>
                            <li className="magnetic">
                                 <Link to="/projects">Projects</Link>
                            </li>
                        </div>

                        <div className="magnetic">
                            <li>
                                 <Link to="/contact">Contact</Link>
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

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-toggle">

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <i class="ri-menu-line"></i>
                </button>
            </div>
        </header>
    )
}

