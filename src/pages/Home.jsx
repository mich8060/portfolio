import Article from '../components/article';
import Case from "../components/case";
import Intro from "../components/intro";
import Brands from "../components/brands";
import Work from "../components/work";

function Home() {
    return (
        <>
            <Intro>
                <h1><span>Hello.</span> I’m Michael Stevens. I create impactful designs that enrich people&apos;s experiences and make a difference.</h1>
                <p>Discover more about my design journey below, and delve into a comprehensive overview of my professional background on <a href="https://www.linkedin.com/in/michael-stevens-a010a66" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            </Intro>
            <Work />
            <Brands />
            <Case />
        </>
    );
}

export default Home;
