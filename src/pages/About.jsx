
import Brands from "../components/brands";
import Intro from "../components/intro";
import Work from "../components/work";

function About() {
    return (
        <div>
            <Intro>
                <h1>I am currently Head of Design & Product at <span>Project Broadcast</span></h1>
                <p>Explore the list below to discover a range of skills I've acquired and honed over the years. Take a glimpse into the diverse skill set I've developed through my experiences.</p>
            </Intro>
            <Work />
            <Brands />
        </div>
    );
}

export default About;
