import './work.scss';

function Work({children}){
    return(
        <section className="work">
            <div className="work--container">
                <div className="work--column">
                    <small>Experience</small>
                    <ul>
                        <li><strong>Head of Product & Design</strong> Project Broadcast – April 2022 to Present</li>
                        <li><strong>Principal Product Designer</strong> Pluralsight.com – June 2021 to April 2022</li>
                        <li><strong>Adjunct Professor</strong> Weber State University – Aug 2020 to June 2021</li>
                        <li><strong>Sr. Product Designer</strong> Pluralsight.com – July 2016 to June 2021</li>
                        <li><strong>Senior Designer & Design Manager</strong> Backcountry.com – November 2014 to July 2016</li>
                        <li><strong>Sr. User Experience Designer</strong> Backcountry.com – June 2012 - November 2014</li>
                        <li><strong>Interim Product Manager</strong> Backcountry.com – June 2012 - January 2013</li>
                        <li><strong>Sr. User Experience Designer</strong> Skullcandy – July 2011 - June 2012</li>
                        <li><strong>User Experience Designer</strong> Backcountry.com – April 2008 - July 2011</li>
                        <li><strong>Rapid Prototype Developer</strong> Backcountry.com – August 2007 - April 2008</li>
                        <li><strong>Graphic Designer</strong> Backcountry.com – July 2006 - August 2007</li>
                        <li><strong>Front End Developer</strong> Backcountry.com – March 2004 - July 2006</li>
                    </ul>
                </div>
                <div className="work--column">
                    <small>Education</small>
                    <ul>
                        <li><strong>Weber State University</strong> BFA, Visual Communications</li>
                        <li><strong>Ogden Applied Technology College</strong> Technical Associates Degree, Multimedia & Web Development</li>
                    </ul>
                    <small>Skills</small>
                    <ul>
                        <li><strong>Design</strong> Figma, Figma Prototyping, Layout Hierarchy, Typography, Color Theory, Branding, Adobe Creative Suite, Creative Thinking, Brand Language Development, and Design System Creation & Management.</li>
                        <li><strong>Technology</strong> HTML5, CSS, SASS, jQuery, PHP, SQL, JavaScript, Node, React.js, Vue.js, Next.js, Express</li>
                        <li><strong>Research</strong> Usability Testing, Survey Composition, Analytics Technologies, User Interviews, Persona Development.</li>
                        <li><strong>Product Management</strong> Analytics, OKR creation & management, Executive & Stakeholder communications & presentation, Public Speaking and Strategy Development.</li>
                        <li><strong>Servant Leadership & Management</strong> 1:1 Communication, Career Growth, active listening, problem solving, conflict management, interpersonal relationship development and mentorship.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work;