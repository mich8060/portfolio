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
            <Display>I am currently a Sr. Product Designer at <a href="http://www.pluralsight.com/" target="_blank" rel="noopener noreferrer">Pluralsight</a> and I also freelance from <span>time-to-time</span>.</Display>
            <Heading theme="dark">
                Check the list below to see some of the skills I've obtained throughout
                the years. You can always <a href="mailto:mich8060@hotmail.com" target="_blank" rel="noopener noreferrer">email me</a> to learn more.
            </Heading>
            <List>
                <div className="list--column">
                    <div className="list--title">Education</div>
                    <Role title="Senior Product Designer" timeline="Pluralsight.com – July 2016 to Present" />
                    <Role title="Principal Designer" timeline="Backcountry.com – January 2015 to July 2016" />
                    <Role title="Senior User Experience Design Manager" timeline="Backcountry.com – November 2014 to January 2015" />
                    <Role title="Senior User Experience Designer" timeline="Backcountry.com – June 2012 - November 2014" />
                    <Role title="Senior User Experience Designer" timeline="Skullcandy – July 2011 - June 2012" />
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
                    <Role title="Design" timeline="Layout Hierarchy, Typography, Color Theory, Branding, Adobe Creative Suite, Creative Thinking" />
                    <Role title="Technology" timeline="HTML5, CSS, SASS, jQuery, PHP, SQL, JavaScript, Node, React.js, Vue.js" />
                    <Role title="Research" timeline="Usability Testing, Survey Composition, Analytics Technologies, User Interviews, Persona Development" />
                    <Role title="Product Management" timeline="Analytics, OKR creation &amp; management, Executive &amp; Stakeholder communications &amp; presentation" />
                    <Role title="Servant Leadership &amp; Management" timeline="1:1 Communication, Career Growth, Personal therapist." />
                </div>
            </List>
        </Container>
    )
}

export default About