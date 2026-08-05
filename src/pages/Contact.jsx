import Navbar from "../components/Navbar"

export default function Contact(){
    return <> 
           <Navbar />
            <h1 className="form-title">Contact Us</h1>

             <div className="container contact-container">

                {/* <!-- Contact form --> */}

            <div className="contact-form">

                <form action="https://formspree.io/f/xbdnglbb" method="POST">

                    <div className="input-container">
                        <label>
                            <p>Your Name:</p> 
                            <input type="name" name="name"></input>
                        </label>
                    </div>
                    
                    <div className="input-container">
                        <label>
                            <p>Your Email:</p> 
                            <input type="email" name="email"></input>
                        </label>
                    </div>
                
                    <div className="input-container">
                        <label>
                            <p>Your Message:</p> 
                            <textarea name="message"></textarea>
                        </label>
                    </div>
                
                    {/* <!-- your other form fields go here --> */}
                    <div className="input-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div> 

             {/* <!-- Contact Info --> */}
            <div className="contact-info">
                <div className="phone">
                    <h4>Phone: 0000000000</h4>
                </div>
                
                <div className="email">
                    <h4>Email: info@something.com</h4>
                </div>

                <div className="address">
                    <h4>Address: 4 street name</h4>
                </div>
            </div>
          
        </div>
        </>
}