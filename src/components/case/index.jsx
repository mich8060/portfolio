import Project from '../project';
import './case.scss';

function Case(){
    return(
        <section className="case">
            <div className="case--container">
                <div className="case--content">
                    <h2>Designs & Case Studies</h2>
                    <ul className="case--list">
                        <li>
                            <Project 
                                title="Project Broadcast: Steering the Brand Development Journey" 
                                excerpt="Explore the dynamic transformation of Project Broadcast's brand journey, guided by authentic user feedback and strategic insights. Witness firsthand how a mere concept evolved into a vibrant and impactful brand, showcasing the power of user-centered design."
                                role="Sole Designer & Product Manager"
                                company="Project Broadcast"
                                href="/case-studies/project-broadcast-sterring-the-brand-development-journey"
                                image="michael-stevens-steering-brand-development-journey.png"
                            />
                        </li>
                        <li>
                            <Project 
                                title="The Story of Pluralsight's Homepage Evolution" 
                                excerpt="Embark on a journey through the evolution of Pluralsight's homepage, where user-centric exploration, data-driven insights, and bold experimentation converge. Dive into the story behind the design decisions that reshaped the digital landscape."
                                role="Sr. Product Designer"
                                company="Pluralsight"
                                href="/case-studies/the-story-of-pluralsights-homepage-evolution"
                                image="michael-stevens-pluralsight-homepage-evolution.png"
                            />
                        </li>
                        <li>
                            <Project 
                                title="Unlocking User Insights: A Guide to Effective User Interviews" 
                                excerpt="Discover the art of effective user interviews in our comprehensive case study. Learn proven methods, recruitment strategies, and interview techniques to unlock valuable insights for your product design process."
                                role="Author, Researcher & Speaker"
                                company="Owlet"
                                href="/case-studies/unlocking-user-insights-a-guide-to-effective-user-interviews"
                                image="michael-stevens-unlocking-user-insights.png"
                            />
                        </li>
                        <li>
                            <Project 
                                title="Creating a Unified Design Language" 
                                excerpt="Integrating validated principles, templates, and methods into a self-guided living resource, this initiative empowered teams to iterate faster and gain more reliable insights."
                                role="Principal Design Leader"
                                company="Pluralsight"
                                image="michael-stevens-unifed-design-system.png"
                                href="/case-studies/creating-a-unified-design-language"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Case;