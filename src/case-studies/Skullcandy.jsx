import { Tab, TabPanel } from '../components/tabs';

function Skullcandy(){
    return (
        <>
            <div className="details--visual">
                <div className="details--desktop"><img src="/michael-stevens-skullcandy-hero_desktop.png" alt="" /></div>
                <div className="details--tablet"><img src="/michael-stevens-skullcandy-hero_tablet.png" alt="" /></div>
                <div className="details--mobile"><img src="/michael-stevens-skullcandy-hero_mobile.png" alt="" /></div>
                <div className="details--visual_left" style={{background:'#EEF2FE'}}></div>
                <div className="details--visual_right" style={{background:'#F9FAFC'}}></div>
            </div>
            <div className="details--headline">
                <h1>The Usability Challenge: Sustaining Growth in Skullcandy's Shifting Style</h1>
                <ul>
                    <li><strong>Role:</strong> Sole UX Designer</li>
                    <li><strong>Client:</strong> Skullcandy</li>
                    <li><strong>Date:</strong> 2011</li>
                </ul>
            </div>
            <Tab>
                <TabPanel title="Detailed">
                    <div className="details--block">
                        <div className="details--left">
                            <p>My experience at Skullcandy was truly memorable. It was a sunny day in Park City, Utah, and as I stepped out for lunch, a friend from Skullcandy pulled up with some colleagues in a black SUV and invited me to join him for lunch. Riding in a black SUV with tinted windows honestly felt like I had been kidnapped by someone from the mob. I soon found myself offered a job and being employed at Skullcandy, where they had just completed a platform redesign and were already planning another for six months down the road.</p>
                            <div style={{height:24}}></div>
                            <h2>Challenges and Opportunities</h2>
                            <p>Upon arrival, I identified significant usability issues in the newly designed platform. Rather than immediately proceeding with the impending site launch, I persuaded the team to delay the launch to address these issues. By tackling navigation and homepage concerns beforehand, we set the stage for more substantial improvements.</p>
                            <i>Imagery: Visual representation of the initial platform design and potential areas for optimization.</i>                        
                            <div style={{height:48}}></div>
                            <h2>Optimization Efforts</h2>
                            <p>Post-launch, my Product Manager and I focused on optimizing the platform. We identified and rectified critical issues such as the placement of the buy box and inefficient product color selection processes. Additionally, we revamped the search and browse experience for enhanced user engagement.</p>
                        
                        </div>
                    </div>
                </TabPanel>
                <TabPanel title="Summary">
                    <div className="details--block">
                        <h2>Summary</h2>
                        <div style={{height:24}}></div>
                        <ul className="details--summary">
                            <li><strong></strong> </li>
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
  
  export default Skullcandy;
  