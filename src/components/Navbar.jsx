import { Link } from "react-router-dom";

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
            </nav>

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
        </header>

        
        
        
    )
    
}

//  <nav class="container">
//                 <div class="main-menu">
//                     <ul>
//                         <div class="magnetic">
//                                 <li><a href="index.html">Links</a></li>
//                         </div>
                        
//                         <div class="magnetic">
//                                 <li><a href="testing.html">Tests</a></li>
//                         </div>

//                         <div class="magnetic">
//                             <li><a href="about.html">About</a></li>
//                         </div>

//                             <div class="magnetic">
//                                 <li><a href="contact.html">Contact</a></li>
//                         </div>
//                     </ul>
//                 </div>
               
//                 <div class="social-menu">
//                     <ul>
//                         <div class="magnetic">
//                             <li><a target="_blank" href="https://www.linkedin.com/in/adam-alexander-91528337/"><i class="ri-linkedin-box-fill"></i></a></li>
//                         </div>
//                         <div class="magnetic">
//                             <li><a target="_blank" href="https://www.behance.net/AdamJA"><i class="ri-behance-line"></i></a></li>
//                         </div>
//                     </ul>
//                 </div>
        
//             </nav>