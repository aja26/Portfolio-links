import "../../src/styles/projecttemplate.css";
import msaSafetyImage from "../assets/media/projects/MSA-Safety/MSA-Safety.jpg";
import butlerRecruitmentImage from "../assets/media/projects/Butler-Recrruitment/Butler-Recruitment.jpg";

// The template for each project will run this

export default function ProjectTemplate(){
    return <>
    <section className="featured-project-image">
        <img className="project-featured-img" src={msaSafetyImage} alt="MSA-Safety"></img>
    </section>
    
    <section>
        <h1 className="center">Project Ttitle</h1>
        <p className="center">MSA Safety works with healthcare professionals to ensure a healthier future driven by innovation. Following our initial fact-finding and discovery workshop with the project lead, social brand manager, and marketing specialist, we compiled in-depth stakeholder and user surveys to identify key user goals, current pain points, levels of satisfaction, and future aspirations. Once we had developed a better understanding of the project, we identified one of the most important priorities for MSA Safety: ensuring their website was informative, easy to use, and, most importantly, effective in driving better sign-ups and enrolments for their courses.</p>
        <p className="center"><strong>Live Site: </strong></p>
        <p className="center"><strong>Role: Lead Designer - UX/UI + Web Developer</strong></p>
    </section>
     <section>
       <img className="project-image" src="" alt=""/>
       <img className="project-image" src="" alt=""/>
       <img className="project-image" src="" alt=""/>
    </section>
     <section>
        <h1 className="center">Sitemaps & Wireframes</h1>
        <p className="center">To increase activity...</p>
        <img className="project-image" src="" alt=""/>
        <img className="project-image" src="" alt=""/>
        <img className="project-image" src="" alt=""/>
    </section>  
    <section>
        <h1 className="center">Design Iteration</h1>
        <p className="center">After a number of </p>
        <img src="" alt="image to go here"/>
    </section>
    <section>
         <img src="" alt=""/>
        <h1 className="center">Sub Pages</h1>
        <p className="center">The main goal of the MSA Safety website was always to increase</p>
        <img className="project-image" src="" alt="desktop-sub-pages"/>
        <img className="project-image" src="" alt="mobile-sub-pages"/>
    </section>
     <section>
       {/* FINISH */}
       
        {/* <img src={butlerRecruitmentImage} alt="Butler-Recruitment" /> */}
    </section>
    



    {/* Use Behance as template structure */}
    
    <p className="project-desc">Here is the project desc</p>
    </>
}