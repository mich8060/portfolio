import { Tab, TabPanel } from '../components/tabs';
import Role from '../components/role';
import Image from '../components/image';
import { Link } from 'react-router-dom';

function HomepageEvolution(){
    return (
        <>
            <div className="details--visual">
                <div className="details--desktop"><img src="/michael-stevens-pluralsight-home-hero_desktop.png" alt="" /></div>
                <div className="details--tablet"><img src="/michael-stevens-pluralsight-home-hero_tablet.png" alt="" /></div>
                <div className="details--mobile"><img src="/michael-stevens-pluralsight-home-hero_mobile.png" alt="" /></div>
                <div className="details--visual_left" style={{background:'#202938'}}></div>
                <div className="details--visual_right" style={{background:'#202938'}}></div>
                <img src="" alt="" />
            </div>
            <div className="details--headline">
                <h1>The Story of Pluralsight's Homepage Evolution</h1>
            </div>
            <Tab>
                <TabPanel title="Detailed">
                    <div className="details--block">

                        <div className="details--group">
                            <h2>Project Context</h2>
                            <p>When I inherited the homepage for Pluralsight's main application, it hadn't been changed in over a year. The last time the company had done major refactoring to it was when they rebranded the entire application, and the homepage was more skinned than iterated upon. There was no analytics or tracking in place, and existing user feedback was outdated or hard to find. The homepage currently had only two states, one for users who had yet to engage in any content and one for users who had. </p>
                            <Role
                                date="2019-2022"
                                role="Sr. Product Designer"
                                method="A/B Testing, User Interview, Cross-Functional Collaboration, Visual Hierarchy, Figma"
                                teammates="Michael Stevens(Designer), Roman Valentine(PM)"
                            />
                        </div>
                        
                        <div className="details--group">
                            <h2>Process</h2>
                            <p>Our process involves thorough research to identify user needs and preferences, followed by designing, prototyping, and validating potential solutions. Each stage requires collaboration with stakeholders from various departments to ensure a cohesive user experience. By following the UX design process closely, businesses can create products that meet user needs, enhance customer satisfaction, and gain a competitive edge in the market.</p>
                            <p>Explore my article on <Link to="/about">Creating a Unified Design Language</Link> for an in-depth look at my design methodology.</p>
                            <Image type="container" src="/michael-stevens-process.png" bg="#F9FAFC" />
                        </div>
                        
                        <div className="details--group">
                            <h2>Research</h2>
                            <p>Upon inheriting the homepage, the lack of available data was a harsh reality. User-centric exploration proved indispensable, stepping in to save the day in the absence of traditional data-driven insights. Conducting general user testing on the homepage alongside the product manager revealed valuable insights into user behaviors and usage patterns, given the universal engagement with the homepage among users.</p>
                            <p>My Product Manager and I also set out to better understand the flow of the user's experience, we created an onboarding journey map to better understand the experience leading into the homepage as well as the evolutions of the user as they became a mature user. This helped us identify opportunities as well as some long term goals. Based on the interviews and the journey map we had created we set out to create a set of goals of values that our work would focus on in order to improve the experience. </p>
                            <Image 
                                type="caption" 
                                src="/michael-stevens-onboarding-flow.png" 
                                alt=""
                                caption="This flow chart proved instrumental in mapping out every conceivable path to the homepage, guaranteeing comprehensive consideration for each user experience."
                            />
                            <Image 
                                type="caption" 
                                src="/michael-stevens-journey-map.png" 
                                alt=""
                                caption="This journey map really helped us to organize both opportunities and longer term goals."
                            />
                        </div>

                        <div className="details--group">
                            <h2>Define</h2>
                            <p>Drawing insights from customer interviews and a self-made heatmap based off observation, we uncovered significant user engagement patterns and preferences.</p>
                            <p><strong>Our main challenges to overcome were:</strong></p>
                            <ol>
                                <li>The users rarely if ever scrolled the page meaning that on average people only saw the top 700 pixels.</li>
                                <li>The primary action most users took was returning to the last video they were watching, via the continue watching widget along the top.</li>
                                <li>Users immediately engaged with the search function, even sometimes to locate their last viewed video even though it was actually on the page.</li>
                            </ol>
                            <Image 
                                type="caption" 
                                src="/michael-stevens-heatmap.png" 
                                alt="The heat map illustrated the engagment and portions of the homepage most people experienced."
                                caption="The heat map illustrated the engagment and portions of the homepage most people experienced."
                            />
                            <Image
                                type="caption"
                                src="/michael-stevens-most-popular-features.png"
                                alt="Individually, we embarked on a journey to uncover features that elicited higher rates of engagement, as well as those that did not."
                                caption="Individually, we embarked on a journey to uncover features that elicited higher rates of engagement, as well as those that did not."
                            />
                        </div>

                        <div className="details--group">
                            <h2>Iteratation</h2>
                            <p>We initiated the design iterations by pinpointing areas where we could achieve quick wins. Our hypothesis was that by optimizing elements above the fold, users would be more likely to engage with them simply because they were immediately visible.</p>
                            <Image
                                type="caption"
                                src="/michael-stevens-compact-space.png"
                                alt="We set out on ways that we could compact the space to get more above the fold."
                                caption="We set out on ways that we could compact the space to get more above the fold."
                            />
                            <p>After iterative enhancements to boost activation and engagement metrics, we decided to conducted an A/B test. By removing the popular "Continue Learning" section at the top and moving the last watched video into the then history channel we were able to increase visibility of other key homepage components. </p>
                            <Image
                                type="caption"
                                src="/michael-stevens-pluralsight-first-step.png"
                                alt=""
                                caption=""
                            />
                            <p>Further refinements were made to elevate more content above the fold, resulting in a notable increase of approximately 2% in user engagement and video starts as well as increased click through to the Paths & Channels features.</p>
                            <Image
                                type="container"
                                src="/michael-stevens-optimized-homepage.jpg"
                                alt="With our newly optimized homepage, we started to focus on the content."
                                caption="With our newly optimized homepage, we started to focus on the content."
                            />
                        </div>

                        <div className="details--group">
                            <h2>Personalization</h2>
                            <p>While engaging in user interviews with our customers, a recurring insight emerged: many customers perceived our homepage as personalized to their needs, despite it not being so. Recognizing the inherent value of personalization in driving engagement, my team and I embarked on a mission to deliver genuine personalized experiences to our users.</p>
                            <p>One of our earliest ventures into personalization occurred during a company-wide hack day, where a developer and I teamed up to craft a goal-setting widget. Through previous user testing, we discovered that many users expressed their aspirations to 'set specific goals for themselves' or 'aim to learn for [x] or [y] hours a week.' These goals often revolved around learning time commitments per day, week, or month. Our initial solution crafted during a company wide hack day was a simple progress indicator paired with the ability to set dedicated learning time goals for the week.</p>
                            <Image
                                type="caption"
                                src="/michael-stevens-goat-setting-widget.jpg"
                            />
                            <p>Despite its modest size and quick development, we implemented thorough tracking mechanisms to gauge its effectiveness. After a few months of analysis, we observed a notable 2% increase in content engagement among users who interacted with the goal-setting widget.</p>
                            <Image
                                type="container"
                                src="/michael-stevens-pluralsight-mini-profile.png"
                                caption="We eventually started to move profile based information into what we called the 'Mini Profile' through a series of do no harm releases."
                            />
                            <Image
                                type="container"
                                src="/michael-stevens-pluralsight-full.png"
                            />
                            <p>The success of these iterations fueled broader initiatives within the company, including the hiring of machine learning developers to deepen personalization efforts and the establishment of a dedicated team focused on platform gamification.</p>
                        </div>
                        
                        <div className="details--group">
                            <h2>Recommendation Engine</h2>
                            <p>Responding to user expectations for personalized content recommendations, we embarked on integrating AI-driven features to enhance user experiences. Despite the seemingly straightforward interface, the implementation required a nuanced approach, as AI relies heavily on user feedback for iterative improvements. Recognizing this, we identified two primary avenues for user feedback:</p>
                            <h3>Indirect Feedback</h3>
                            <p>The most straightforward feedback we could obtain was observing user engagement with the surfaced content. For me, it was a simple matter of monitoring the incoming data.</p>
                            <h3>Direct Feedback</h3>
                            <p>Implementing Progressive Disclosure in UI design proved challenging, especially given my aversion to busy interfaces. Instead, I championed the concept of revealing additional details or actions only when users expressed interest, either by hover or click actions. For our recommendation engine, I opted for a two-layered interaction approach: a hover to reveal a visual overlay on the course card, followed by a click into a "more" menu for feedback. While seemingly straightforward, this solution represents a significant improvement, considering the potential for a cluttered interface.</p>
                            <Image
                                type="caption"
                                src="/michael-stevens-recommendation-feedback.png"
                                alt=""
                                caption=""
                            />
                            <p>By deploying our recommendation content engine and utilizing user engagement data, we significantly boosted platform content consumption by 4%. This underscores the effectiveness of our approach in meeting user expectations for personalized content and highlights the importance of data-driven decision-making in improving user experiences.</p>
                        </div>


                        <div className="details--group">
                            <h2>Total Personalization</h2>
                            <p>Before I transitioned to the role of Principal Designer, the home team was headed towards full-page personalization and customization. This involved breaking down the homepage into individual components, allowing us to dynamically insert or remove content based on user engagement. .</p>
                            <Image
                                type="container"
                                src="/michael-stevens-pluralsight-customized-home.png"
                            />
                            <Image
                                type="container"
                                src="/michael-stevens-homepage-main-personalization.png"
                                alt=""
                                caption=""
                            />
                            <Image
                                type="container"
                                src="/michael-stevens-componentization.png"
                                alt=""
                                caption=""
                            />
                        </div>


                    </div>
                </TabPanel>
                <TabPanel title="Summary">
                    <div className="details--block">
                        <h2>Summary</h2>
                        <div style={{height:24}}></div>
                        <ul className="details--summary">
                            <li><strong>User-Centric Exploration</strong> Leveraged general user testing alongside product management insights to understand user behaviors and usage patterns.</li>
                            <li><strong>Mapping the User Journey</strong> Created an onboarding journey map to identify opportunities and long-term goals based on user interviews and journey mapping.</li>
                            <li><strong>Insights to Action</strong> Utilized customer interviews and heatmaps to optimize page elements for increased engagement, prompting strategic emphasis on driving traffic to key experiences.</li>
                            <li><strong>Bold Moves and A/B Testing</strong> Conducted A/B testing to enhance activation and engagement metrics, resulting in the strategic removal and relocation of homepage features.</li>
                            <li><strong>Personalization</strong> Implemented a goal-setting widget based on user aspirations, leading to a 2% increase in content engagement.</li>
                            <li><strong>AI-Driven Recommendations</strong> Integrated AI-driven features to enhance user experiences, focusing on indirect and direct user feedback to improve interface design.</li>
                            <li><strong>Conclusion</strong> By deploying a recommendation content engine and leveraging user engagement data, platform content consumption increased by 4%, paving the way for future advancements towards complete personalization.</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tab>
            <div className="details--figma">
                <iframe title="Figma Designs" style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5hwzIvzFXtZOHAiK1OANUn%2FHomepage-Evolution%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DQYJrBsaV4p04tltK-1" allowfullscreen></iframe>
            </div>
       </>
    );
  };
  
  export default HomepageEvolution;
  