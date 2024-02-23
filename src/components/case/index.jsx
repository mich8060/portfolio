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
                                type="case study"
                                title="The Story of Pluralsight's Homepage Evolution" 
                                excerpt="Embark on a journey through the evolution of Pluralsight's homepage, where user-centric exploration, data-driven insights, and bold experimentation converge. Dive into the story behind the design decisions that reshaped the digital landscape."
                                role="Sr. Product Designer"
                                company="Pluralsight"
                                href="/case-studies/the-story-of-pluralsights-homepage-evolution"
                                imageDesktop="michael-stevens-pluralsight-home-card_desktop.png"
                                imageMobile="michael-stevens-pluralsight-home-card_mobile.png"
                            />
                        </li>
                        <li>
                            <Project 
                                type="case study"
                                title="Project Broadcast: Steering the Brand Development Journey" 
                                excerpt="Explore the dynamic transformation of Project Broadcast's brand journey, guided by authentic user feedback and strategic insights. Witness firsthand how a mere concept evolved into a vibrant and impactful brand, showcasing the power of user-centered design."
                                role="Sole Designer & Product Manager"
                                company="Project Broadcast"
                                href="/case-studies/project-broadcast-sterring-the-brand-development-journey"
                                imageDesktop="michael-stevens-project-broadcast-card_desktop.png"
                                imageMobile="michael-stevens-project-broadcast-card_mobile.png"
                            />
                        </li>
                        <li>
                            <Project 
                                type="Article"
                                title="Unlocking User Insights: A Guide to Effective User Interviews" 
                                excerpt="Discover the art of effective user interviews in our comprehensive case study. Learn proven methods, recruitment strategies, and interview techniques to unlock valuable insights for your product design process."
                                role="Author, Researcher & Speaker"
                                company="Owlet, Workshop"
                                href="/articles/unlocking-user-insights-a-guide-to-effective-user-interviews"
                                imageDesktop="michael-stevens-project-user-interviews-card_desktop.png"
                                imageMobile="michael-stevens-project-user-interviews-card_mobile.png"
                            />
                        </li>
                        <li>
                            <Project 
                                type="case study"
                                title="Creating a Unified Design Language" 
                                excerpt="Integrating validated principles, templates, and methods into a self-guided living resource, this initiative empowered teams to iterate faster and gain more reliable insights."
                                role="Principal Design Leader"
                                company="Pluralsight"
                                href="/case-studies/creating-a-unified-design-language"
                                imageDesktop="michael-stevens-unified-design-language-card_desktop.png"
                                imageMobile="michael-stevens-unified-design-language-card_mobile.png"
                            />
                        </li>
                        <li>
                            <Project 
                                type="case study"
                                title="The Usability Challenge: Sustaining Growth in Skullcandy's Shifting Style" 
                                excerpt="Join us on a journey through the dynamic landscape of Skullcandy's digital transformation, where user-centric design and continuous optimization paved the way for a seamless transition amidst shifting brand styles."
                                role="Sole UX Designer"
                                company="Skullcandy"
                                href="/case-studies/sustaining-growth-in-skullcandys-shifting-style"
                                imageDesktop="michael-stevens-skullcandy-card_desktop.png"
                                imageMobile="michael-stevens-skullcandy-card_mobile.png"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Case;