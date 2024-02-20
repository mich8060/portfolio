import './work.scss';

function Work({children}){
    return(
        <section className="work">
            <div className="work--container">
                <div className="work--column">
                    <small>Experience</small>
                    <ul>
                        <li><strong>Principal Product Designer</strong> Project Broadcast – April 2022 to Feb 2024</li>
                        <li><strong>Principal & Sr. Product Designer</strong> Pluralsight.com – June 2016 to April 2022</li>
                        <li><strong>Sr. UX Designer & Manager</strong> Backcountry.com – June 2012 to July 2016</li>
                        <li><strong>Interim Product Manager</strong> Backcountry.com – December 2012 - June 2013</li>
                        <li><strong>Sr. User Experience Designer</strong> Skullcandy – July 2011 - June 2012</li>
                        <li><strong>User Experience Designer</strong> Backcountry.com – April 2008 - July 2011</li>
                        <li><strong>Graphic Designer</strong> Backcountry.com – July 2006 - April 2008</li>
                        <li><strong>Front End Developer</strong> Backcountry.com – March 2004 - July 2006</li>
                    </ul>
                    <small>Education</small>
                    <ul>
                        <li><strong>Weber State University</strong> BFA, Visual Communications</li>
                        <li><strong>Ogden Applied Technology College</strong> Multimedia Design</li>
                    </ul>
                </div>
                <div className="work--column">
                    <small>Skills</small>
                    <ul>
                        <li><strong>User Experience Design</strong> Figma, Figma Prototyping, Responsive Wireframing, Prototyping, User Flows, Journey Mapping, Interaction Design, Design System Creation & Management.</li>
                        <li><strong>Visual Design</strong> Layout Hierarchy, Typography, Color Theory, Branding, Adobe Creative Suite, Brand Language Development, Illustration, Iconography, Visual Storytelling.</li>
                        <li><strong>Technology</strong> HTML5, CSS, SASS, jQuery, PHP, SQL, JavaScript (Node, React.js, Vue.js, Next.js), Express.</li>
                        <li><strong>Research</strong> Usability Testing, Survey Composition, Analytics Technologies, User Interviews, Persona Development.</li>
                        <li><strong>Product Management</strong> Analytics, OKR Creation & Management, Executive & Stakeholder Communications & Presentation, Agile Methodologies, Public Speaking, Strategy Development.</li>
                        <li><strong>Servant Leadership & Management</strong> 1:1 Communication, Presentation Skills, Career Growth, Active Listening, Problem Solving, Conflict Management, Interpersonal Relationship Development, Mentorship.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work;