import { Tab, TabPanel } from '../components/tabs';

import Role from '../components/role';
import Image from '../components/image';

function ProjectBroadcast(){
    return (
        <>
            <div className="details--visual">
                <div className="details--desktop"><img src="/michael-stevens-project-broadcast-hero_desktop.png" alt="" /></div>
                <div className="details--tablet"><img src="/michael-stevens-project-broadcast-hero_tablet.png" alt="" /></div>
                <div className="details--mobile"><img src="/michael-stevens-project-broadcast-hero_mobile.png" alt="" /></div>
                <div className="details--visual_left" style={{background:'#EEF2FE'}}></div>
                <div className="details--visual_right" style={{background:'#F9FAFC'}}></div>
            </div>
            <div className="details--headline">
                <h1>Project Broadcast: Steering the Brand Development Journey</h1>
            </div>
            <Tab>
                <TabPanel title="Detailed">
                    <div className="details--block">
                        <div className="details--left">
                            <div className="details--group">
                                <h2>Project Context</h2>
                                <p>Imagine being dropped into a world where you have to create something totally new—a brand, from scratch. That's exactly what I faced with Project Broadcast. It was exciting but also kind of overwhelming.</p>
                                <Role
                                    date="2022-2024"
                                    role="Principal Product Designer & Product Manager"
                                    method="A/B Testing, Analytics, User Interview, Branding & Color Theory, Figma, PHP Development, React Prototypes"
                                    teammates="Michael Stevens (Designer, Developer, PM, Basically Everything)"
                                />
                                <p>When I arrived at projectbroadcast.com, it was a single-page site with irregular font usage, and the features list at the bottom spanned over 6000 pixels in length.</p>
                                <Image 
                                    type="caption" 
                                    src="/michael-stevens-project-broadcast-before.png" 
                                    alt="When I arrived projectbroadcast.com was a single page site, odd font usage and the features list at the bottom spanned over 6000 pixels long."
                                    caption=""
                                />
                            </div>
                            <div className="details--group">
                                <h2>Customer Insights</h2>
                                <p>Working at Project Broadcast, a text marketing platform, offered me a distinctive and beneficial role. With our product centered around text messaging services, I enjoyed a rare chance to interact directly with our customers.</p>
                                <p>This access allowed me to communicate with customers like never before – simply by opening a chat I had direct access to any of our customers.</p>
                                <Image 
                                    type="caption" 
                                    src="/michael-stevens-project-broadcast-chat.png" 
                                    alt="This access allowed me to communicate with customers like never before – simply by opening a chat I had direct access to any of our customers."
                                    caption=""
                                />
                                <p>The Project Broadcast user demographic skews towards women aged 30 to 50, often balancing small business ownership with daily responsibilities. This engaged community actively participates in webinars and industry events, sharing knowledge and resources to enhance their skills and business strategies.</p>
                                <Image 
                                    type="caption" 
                                    src="/michael-stevens-project-broadcast-share.png" 
                                    alt="This graphic conveys acurately the sort of sharing nature of Project Broadcast."
                                    caption="This graphic conveys acurately the sort of sharing nature of Project Broadcast."
                                />
                            </div>

                            <div className="details--group">
                                <h2>Logo Design</h2>
                                <p>Designing the logo was driven by my own dissatisfaction rather than a formal request from the business. Despite their contentment with the wifi symbol as their logo, I felt it didn't sufficiently represent the brand. Inspiration struck when I encountered an illustration experimenting with a 3D effect, igniting the idea to make our logo stand out.</p>
                                <Image 
                                    type="caption" 
                                    src="/michael-stevens-project-broadcast-earily-stages.png" 
                                    alt="Here are some of the earlier concepts I did before arriving at the final concept."
                                    caption="Here are some of the earlier concepts I did before arriving at the final concept."
                                />
                                <Image 
                                    type="caption" 
                                    src="/michael-stevens-project-broadcast-logo.png" 
                                    alt="The letters 'p, b and d' all had to be handcrafted to pull off the soft edges."
                                    caption="The letters 'p, b and d' all had to be handcrafted to pull off the soft edges."
                                />
                                <p>Ensuring that our brand resonated with our users was a top priority throughout our journey. To achieve this, I formed a special group called the "Product Council." This group consisted of users who were among the first to embrace our platform—our early adopters.</p>
                            </div>

                            <div className="details--group">
                                <h2>Creating the Brand</h2>
                                <p>Creating a brand extends far beyond designing a logo; it encompasses a holistic strategy that defines the essence and personality of a product or company. It involves crafting principles, sharing a compelling story, clarifying the purpose behind existence, and establishing a consistent voice, appearance, and tone across all touchpoints. Here's a detailed exploration of how we approached these crucial aspects:</p>
                                <h3>Establishing Brand Principles</h3>
                                <p>We began by identifying core values and beliefs that form the foundation of our brand. These principles guide our decisions, actions, and interactions with customers, employees, and stakeholders. By articulating clear brand principles, we ensure alignment and consistency in everything we do.</p>
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-principles.png"
                                />
                                <h3>Sharing Our Story</h3>
                                <p>Every brand has a unique narrative that resonates with its audience. We crafted a compelling story that reflects our journey, vision, and mission. By sharing our story authentically and transparently, we connect with customers on a deeper level, fostering trust and loyalty.</p>
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-story.png"
                                />
                                <h3>Explaining Why We Exist</h3>
                                <p>Beyond offering products or services, we defined the purpose behind our existence. We articulated the problem we aim to solve, the needs we address, and the impact we aspire to make in the lives of our customers and the broader community. This clarity of purpose inspires both our team and our customers, driving meaningful engagement and support.</p>
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-exist.png"
                                />
                                <h3>Defining Our Voice, Look, and Sound</h3>
                                <p>Consistency is key to building a strong and recognizable brand. We meticulously defined our brand's voice, ensuring that our communication across all channels reflects our personality, values, and objectives. Additionally, we established visual guidelines that govern our brand's appearance, from color schemes and typography to imagery and design elements. Our brand's tone is carefully calibrated to resonate with our target audience, conveying the right emotions and messages in every interaction.</p>
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-voice.png"
                                />
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-illustration-style.png"
                                />
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-sound.png"
                                />
                                <p>In conclusion, creating a brand goes beyond surface-level aesthetics; it requires a strategic and multifaceted approach that encompasses principles, storytelling, purpose, and consistency. By investing in these foundational elements, we not only establish a strong brand identity but also cultivate lasting relationships with our audience, driving loyalty, advocacy, and success.</p>
                            </div>
                            <div className="details--group">
                                <h2>Implementation and Results</h2>
                                <p>After months of hard work and dedication, our marketing site underwent a remarkable transformation. Previously just a single page, it was completely redesigned from scratch, bringing new life and energy to our brand.</p>
                                <p></p>
                                <Image
                                    type="caption"
                                    src="/michael-stevens-project-broadcast-first-iterations.png"
                                    alt="This represents one of the initial versions of our new marketing site upon its launch."
                                    caption="This represents one of the initial versions of our new marketing site upon its launch."
                                />
                                <p>A glimpse at the latest iteration of our homepage, influenced by our comprehensive competitive analysis.</p>
                                <Image
                                    type="container"
                                    src="/michael-stevens-project-broadcast-latest-home.png"
                                />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel title="Summary">
                    <div className="details--block">
                        <h2>Summary</h2>
                        <div style={{height:24}}></div>
                        <ul className="details--summary">
                            <li><strong>A Brand from Scratch</strong> Building a brand from scratch is challenging. You lack the established elements like voice, colors, and logo, making it difficult to convey the brand effectively.</li>
                            <li><strong>Engaging with Customers</strong> Leveraging our text marketing platform for direct customer insights, I crafted tailored interview questions and conducted interview sessions for a deeper understanding.</li>
                            <li><strong>Crafting a Brand Style</strong> Having discovered users' preference for emojis, I shifted to bright colors and fun designs.</li>
                            <li><strong>Discovering Our Users</strong>Identified a predominantly female user demographic actively engaged in knowledge-sharing.</li>
                            <li><strong>Validating Work Along the Way</strong>Formed a "Product Council" of early adopters and stayed closely connected with users.</li>
                            <li><strong>Crafting the Marketing Site</strong>Analyzed competitor patterns and aligned design with user preferences.</li>
                            <li><strong>Implementation and Results</strong>Witnessed a significant surge in traffic and backed decisions with robust data analysis.</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tab>

            <div className="details--figma">
                <iframe title="Figma Designs" style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3XbTNGpH7b3qYf6t9ryROb%2FProject-Broadcast%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DprOE6WI4pTEoVmzx-1" allowfullscreen></iframe>
            </div>
        </>
    );
  };
  
  export default ProjectBroadcast;
  