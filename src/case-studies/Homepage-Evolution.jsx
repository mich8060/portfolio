export const metadata = {
    title: 'Michael Stevens - The Story of Pluralsight\'s Homepage Evolution',
    description: '...',
  }

function HomepageEvolution(){
    return (
        <>
            <div className="details--visual">
                <img src="/michael-stevens-pluralsight-home-hero.png" alt="" />
            </div>
            <div className="details--headline">
                <h1>The Story of Pluralsight's Homepage Evolution</h1>
                <ul>
                    <li>Role: Sr. Product Designer</li>
                    <li>Client: Pluralsight</li>
                    <li>Date: 2019-2022</li>
                </ul>
            </div>
            <div className="details--block">
                <div className="details--left">
                    <p>When I inherited the homepage for Pluralsight's main application, it hadn't been changed in over a year. The last time the company had done major refactoring to it was when they rebranded the entire application, and the homepage was more skinned than iterated upon. There was no analytics or tracking in place, and existing user feedback was outdated or hard to find. The homepage currently had only two states, one for users who had yet to engage in any content and one for users who had. </p>
                    <div style={{height:24}}></div>
                    <h2>User-Centric Exploration</h2>
                    <p>Upon inheriting the homepage, the lack of available data was a harsh reality. Unlike previous experiences where data was a primary source of insight, the absence of it led to a user-centric exploration approach. Conducting general user testing on the homepage alongside the product manager revealed valuable insights into user behaviors and usage patterns, given the universal engagement with the homepage among users.</p>
                    <div style={{height:24}}></div>
                    <h2>Mapping the User Journey</h2>
                    <p>My Product Manager and I set out to better understand the flow of the user's experience, we created an onboarding journey map to better understand the experience leading into the homepage as well as the evolutions of the user as they became a mature user. This helped us identify opportunities as well as some long term goals. Based on the interviews and the journey map we had created we set out to create a set of goals of values that our work would focus on in order to improve the experience. </p>
                    <div className="details--inline">
                        <div className="details--left"><img src="/michael-stevens-journey-map.png" alt="" /></div>
                        <div className="details--right">This journey map really helped us to organize both opportunities and longer term goals.</div>
                    </div>
                    <div style={{height:24}}></div>
                    <h2>Insights to Action</h2>
                    <p>Utilizing insights from customer interviews, a self made heatmap highlighting user engagement patterns and preferences was created. Identifying user behaviors such as reluctance to scroll and tendency to exit quickly prompted a focus on optimizing page elements for increased engagement. A strategic emphasis was placed on driving traffic to key experiences known to enhance user retention.</p>
                    <div className="details--inline">
                        <div className="details--left"><img src="/michael-stevens-heatmap.png" alt="" /></div>
                        <div className="details--right">The heat map illustrated three things: 1. People didn't scroll.<br />2. Returning to your last video was the main attraction.<br />3. People almost immediately jumped into search, even to find their last video whicn was on this page.</div>
                    </div>
                    <div className="details--inline">
                        <div className="details--left"><img src="/michael-stevens-compact-space.png" alt="" /></div>
                        <div className="details--right">We set out on ways that we could compact the space to get more above the fold.</div>
                    </div>
                    <div style={{height:24}}></div>
                    <h2>Bold Moves and A/B Testing: Iterating for Success</h2>
                    <p>After a series of iterative changes aimed at enhancing activation and engagement metrics, a bold decision was made to conduct A/B testing. The decision involved removing the highly popular "Continue Learning" section to promote greater visibility of other key homepage components. This approach wasn't widely supported initially, with concerns raised about potential user frustration. However, relocating the feature into the history section, considering users often aimed to return to their last video, proved to be a satisfying solution for all involved. Results from the test demonstrated a significant increase in engagement with content, validating the effectiveness of the strategic change.</p>
                    <div style={{height:24}}></div>
                    <div className="details--inline">
                        <div className="details--left"><img src="/michael-stevens-optimized-homepage.jpg" alt="" /></div>
                        <div className="details--right">With our newly optimized homepage, we started to focus on the content.</div>
                    </div>
                    <div style={{height:24}}></div>
                    <h2>Personalization and Goal-Setting: Addressing User Needs</h2>
                    <p>Following the success of initial changes, the focus shifted towards personalization and goal-setting features. Recognizing the need for accountability among users, a goals feature was introduced to encourage goal-setting behavior. Through rigorous A/B testing and continuous iteration, the implementation of personalized goal-setting led to a notable increase in user retention.</p>
                </div>
            </div>
            <div className="details--figma">
                <iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5hwzIvzFXtZOHAiK1OANUn%2FHomepage-Evolution%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DQYJrBsaV4p04tltK-1" allowfullscreen></iframe>
            </div>
       </>
    );
  };
  
  export default HomepageEvolution;
  