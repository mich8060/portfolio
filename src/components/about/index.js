import React from 'react'
import './about.scss'

import Container from '../container/'
import Display from '../display/'
import Heading from '../heading/'
import List from '../list/'
import Role  from '../role/'
import Subtitle from '../subtitle/'

function About(){
    return(
        <Container>
            <Subtitle>About</Subtitle>
            <Display>I am currently Head of Design at <a href="http://www.projectbroadcast.com/" target="_blank" rel="noopener noreferrer">Project Broadcast</a> &amp; a Freelancer.</Display>
            <Heading theme="dark">
                Check the list below to see some of the skills I've obtained throughout
                the years. You can always <a href="mailto:mich8060@hotmail.com" target="_blank" rel="noopener noreferrer">email me</a> to learn more.
            </Heading>
            <List>
                <div className="list--column">
                    <div className="list--title">experience</div>
                    <Role title="Head of Design" timeline="Project Broadcast – April 2022 to Present" />
                    <Role title="Principal Product Designer" timeline="Pluralsight.com – June 2021 to April 2022" />
                    <Role title="Adjunct Professor" timeline="Weber State University – Aug 2020 to June 2021" />
                    <Role title="Sr. Product Designer" timeline="Pluralsight.com – July 2016 to June 2021" />
                    <Role title="Principal Designer" timeline="Backcountry.com – January 2015 to July 2016" />
                    <Role title="Sr. User Experience Design Manager" timeline="Backcountry.com – November 2014 to January 2015" />
                    <Role title="Sr. User Experience Designer" timeline="Backcountry.com – June 2012 - November 2014" />
                    <Role title="Product Manager" timeline="Backcountry.com – June 2012 - January 2013" />
                    <Role title="Sr. User Experience Designer" timeline="Skullcandy – July 2011 - June 2012" />
                    <Role title="User Experience Designer" timeline="Backcountry.com – April 2008 - July 2011" />
                    <Role title="Rapid Prototype Developer" timeline="Backcountry.com – August 2007 - April 2008" />
                    <Role title="Graphic Designer" timeline="Backcountry.com – July 2006 - August 2007" />
                    <Role title="Front End Developer" timeline="Backcountry.com – March 2004 - July 2006" />
                </div>
                <div className="list--column">
                    <div className="list--title">Education</div>
                    <Role title="Weber State University" timeline="BFA, Visual Communications" />
                    <Role title="Ogden Applied Technology College" timeline="Technical Associates Degree, Multimedia &amp; Web Development" />
                    <div className="list--title">Skills</div>
                    <Role title="Design" timeline="Layout Hierarchy, Typography, Color Theory, Branding, Adobe Creative Suite, Creative Thinking and Design System Creation." />
                    <Role title="Technology" timeline="HTML5, CSS, SASS, jQuery, PHP, SQL, JavaScript, Node, React.js, Vue.js" />
                    <Role title="Research" timeline="Usability Testing, Survey Composition, Analytics Technologies, User Interviews, Persona Development." />
                    <Role title="Product Management" timeline="Analytics, OKR creation &amp; management, Executive &amp; Stakeholder communications &amp; presentation, Public Speaking and Strategy Development." />
                    <Role title="Servant Leadership &amp; Management" timeline="1:1 Communication, Career Growth, active listening, problem solving, conflict management, interpersonal relationship development and mentorship." />
                </div>
            </List>
        </Container>
    )
}

export default About