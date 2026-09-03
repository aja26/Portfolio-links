import "../../src/styles/projecttemplate.css";
import msaSafetyImage from "../assets/media/projects/MSA-Safety/MSA-Safety.jpg";

// The template for each project will run this

export default function ProjectTemplate(){
    return <>
    <img className="project-featured-img" src={msaSafetyImage}></img>
    <section>
        <h1>Project Ttitle</h1>
        <p><strong>Date</strong></p>
        <p><strong>Live Site: </strong></p>
        <p><strong>Role: Lead Designer - UX/UI + Web Developer</strong></p>
    </section>
     <section>
       <img src="" />
    </section>
     <section>
        <img src="#" alt="#" />
    </section>  <section>
        <img src="#" alt="#" />
    </section>
    



    {/* Use Behance as template structure */}
    
    <p className="project-desc">Here is the project desc</p>
    </>
}