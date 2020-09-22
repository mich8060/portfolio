import React from "react"
import "./home.scss"

import About from '../../components/about/'
import Intro from '../../components/intro/'
import Project from '../../components/project/'
import Work from '../../components/work/'

import Jasons from '../../assets/img/jasons.jpg'
import Backcountry from '../../assets/img/backcountry_site.jpg'
import Bcapp from '../../assets/img/backcountry_app.jpg'
import Skullcandy from '../../assets/img/skullcandy.jpg'
import Competitive from '../../assets/img/competitive.jpg'

function Home(){
    return(
        <div className="home">
			<Intro />
			<About />
			<Work />
			<Project 
				image={Jasons}
				action="View in App Store"
				href="https://apps.apple.com/us/app/jasons-deli/id1225753298"
				symbol="J" 
				role="Product Designer" 
				theme="light"
				title="Jason's Deli App" 
				desc="I completely designed the experience from start to finish including: Visual design, information architecture and all view templates &amp; experiences." 
			/>
			<Project 
				image={Backcountry}
				action="Visit Site"
				href="https://www.backcountry.com"
				symbol="B" 
				role="Product Designer" 
				theme="light"
				title="Backcountry.com" 
				desc="Principal UX Designer, Visual Designer and Information Architect for all global page types & patterns. Lead all design efforts in iterating site. Hands on user testing with hundreds of users. Formal presentation to Executive, teams and stakeholders." 
			/>
			<Project 
				image={Skullcandy}
				action="Way back preview"
				href="https://web.archive.org/web/20121014082156/http://www.skullcandy.com/"
				symbol="S" 
				role="Product Designer"
				theme="dark" 
				title="Skullcandy.com" 
				desc="Lead the redesign process of all page types & templates, creating new standardized patterns. The site design is no longer online." 
			/>
			<Project 
				image={Bcapp}
				action="View in App Store"
				href="https://apps.apple.com/us/app/backcountry-shop-outdoor-gear/id450920999"
				symbol="B" 
				role="Product Designer"
				theme="light" 
				title="Backcountry App" 
				desc="I completely designed the experience from start to finish including: Visual design, information architecture and all view templates & experiences." 
			/>
			<Project 
				image={Competitive}
				action="Visit Site"
				href="https://www.competitivecyclist.com"
				symbol="C" 
				role="Product Designer"
				theme="dark" 
				title="Competitive Cyclist Site" 
				desc="Took pre-existing experience and based off similiar platforms, redesigned their site adding new features as well as modernizing old ones. Complete created a new visual design & patterns for the site." 
			/>
		</div>
    )
}

export default Home