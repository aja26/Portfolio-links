export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
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
            </div>

            {/* Things to include - social media links */}
            
        </footer>
    )
}