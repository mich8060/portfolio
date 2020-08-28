import React from 'react'
import './about.scss'

function About(){
    return(
        <section className="about">
            <div class="about--container">
                <div className="about--title">About</div>
                <div className="about--display">
                    I am currently a Sr. Product Designer at <a href="http://www.pluralsight.com/" target="_blank">Pluralsight</a> and I also freelance from <span class="inline-block">time-to-time</span>.
                </div>
                <div class="about--heading">
                    Check the list below to see some of the skills I've obtained throughout
                    the years. You can always <a href="mailto:mich8060@hotmail.com" target="_blank">email me</a> to learn more.
                </div>
                <div class="about--list">
                    <div className="about--column">
                        <small>Experience</small>
                        <div>
                            <div className="about--item">
                                <div class="about--role">Senior Product Designer</div>
                                <div class="about--detail">Pluralsight.com – July 2016 to Present</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Principal Designer</div>
                                <div class="about--detail">Backcountry.com – January 2015 to July 2016</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Senior User Experience Design Manager</div>
                                <div class="about--detail">Backcountry.com – November 2014 to January 2015</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Senior User Experience Designer</div>
                                <div class="about--detail">Backcountry.com – June 2012 - November 2014</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Senior User Experience Designer</div>
                                <div class="about--detail">Skullcandy – July 2011 - June 2012</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">User Experience Designer</div>
                                <div class="about--detail">Backcountry.com – April 2008 - July 2011</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Rapid Prototype Developer</div>
                                <div class="about--detail">Backcountry.com – August 2007 - April 2008</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Graphic Designer</div>
                                <div class="about--detail">Backcountry.com – July 2006 - August 2007</div>
                            </div>
                            <div className="about--item">
                                <div class="about--role">Front End Developer</div>
                                <div class="about--detail">Backcountry.com – March 2004 - July 2006</div>
                            </div>
                        </div>
                    </div>
                    <div className="about--column">
                        <small>Education</small>
                        <div className="about--item">
                            <div class="about--role">Weber State University</div>
                            <div class="about--detail">BFA, Visual Communications</div>
                        </div>
                        <div className="about--item">
                            <div class="about--role">Ogden Applied Technology College</div>
                            <div class="about--detail">Technical Associates Degree, Multimedia &amp; Web Development</div>
                        </div>
                        <small>Skills</small>
                        <div className="about--item">
                            <div class="about--role">Design</div>
                            <div class="about--detail">Layout Hierarchy, Typography, Color Theory, Branding, Adobe Creative Suite, Creative Thinking</div>
                        </div>
                        <div className="about--item">
                            <div class="about--role">Technology</div>
                            <div class="about--detail">HTML5, CSS, SASS, jQuery, PHP, SQL, JavaScript, Node, React.js, Vue.js</div>
                        </div>
                        <div className="about--item">
                            <div class="about--role">Research</div>
                            <div class="about--detail">Usability Testing, Survey Composition, Analytics Technologies, User Interviews, Persona Development</div>
                        </div>
                        <div className="about--item">
                            <div class="about--role">Product Management</div>
                            <div class="about--detail">Analytics, OKR creation & management, Executive & Stakeholder communications &amp; presentation</div>
                        </div>
                        <div className="about--item">
                            <div class="about--role">Servant Leadership &amp; Management</div>
                            <div class="about--detail">1:1 Communication, Career Growth, Personal therapist.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About