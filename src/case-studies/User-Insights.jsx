import ExpandableText from '../components/expand';
import Parallax from '../components/parallax';

function ProjectBroadcast(){
    return (
        <>
            <div className="details--visual">
                <div className="details--desktop"><img src="/michael-stevens-project-user-interviews-hero_desktop.png" alt="" /></div>
                <div className="details--tablet"><img src="/michael-stevens-project-user-interviews-hero_tablet.png" alt="" /></div>
                <div className="details--mobile"><img src="/michael-stevens-project-user-interviews-hero_mobile.png" alt="" /></div>
                <div className="details--visual_left" style={{background:'#F9FAFC'}}></div>
                <div className="details--visual_right" style={{background:'#F9FAFC'}}></div>
            </div>
            <div className="details--headline">
                <h1>Unlocking User Insights: A Guide to Effective User Interviews</h1>
                <ul>
                    <li><strong>Role:</strong> Author, Researcher & Speaker</li>
                    <li><strong>Client:</strong> Owlet, Workshop</li>
                    <li><strong>Date:</strong> 2022</li>
                </ul>
            </div>
            <div className="details--block">
                <h2>What is a user interview?</h2>
                <p>A user interview is a qualitative research method that combines observation and one-on-one questioning to gather insights into people's behaviors, habits, preferences, and differences. It involves engaging with individuals directly to understand their experiences, opinions, and needs regarding a product, service, or specific topic. Through open-ended questions and active listening, researchers aim to uncover valuable information that can inform the design, development, and improvement of products or services to better meet user needs and preferences.</p>
                <div style={{height:48}}></div>   
                <h2>What kinds of interviews are there?</h2>
                <p>Understanding user behavior and preferences is crucial for designing products and services that meet their needs effectively. Various types of interviews and testing methods are employed to gather insights into user experiences and interactions. From moderated usability testing to eye-tracking studies, each approach offers unique advantages in uncovering valuable information. Let's explore some common types of interviews and testing methods used in user research.</p>
                <div style={{height:24}}></div>   
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Moderated Usability Testing</h3>
                        <p>Guided sessions where a facilitator collects feedback while users interact with the product.</p>
                    </div>
                    <div className="details--box">
                        <h3>Unmoderated Usability Testing</h3>
                        <p>Users independently test the product, and interactions are recorded for analysis.</p>
                    </div>
                    <div className="details--box">
                        <h3>Card Sorting</h3>
                        <p>For user-friendly menus, create and categorize action and product cards, asking users to arrange and label them.</p>
                    </div>
                    <div className="details--box">
                        <h3>Tree Testing</h3>
                        <p>To assess navigation clarity, prompt users to locate specific items within the hierarchy. Difficulty finding topics signals areas for improvement. This method complements card sorting, forming a comprehensive feedback loop.</p>
                    </div>
                    <div className="details--box">
                        <h3>Design Testing</h3>
                        <p>A collection of multiple tests aimed at evaluating various aspects of a design, including usability, functionality, visual appeal, and overall user experience. These tests provide valuable insights into how users interact with the design, identify potential issues or areas for improvement, and validate design decisions.</p>
                    </div>
                    <div className="details--box">
                        <h3>A/B Testing</h3>
                        <p>Field testing involves randomly dividing users into two groups and presenting them with slightly different versions of the same content to determine which performs better. This online method requires a large number of responses to be statistically significant and can greatly impact ROI.</p>
                    </div>
                    <div className="details--box">
                        <h3>First-click Testing</h3>
                        <p>This testing ensures that eye-catching elements align with user perception, taking only a few seconds and requiring users to indicate their initial click location to complete an action.</p>
                    </div>
                    <div className="details--box">
                        <h3>Eye-tracking</h3>
                        <p>Akin to first-click analysis, determines user attention and engagement by generating a webpage heat map highlighting viewed areas, durations, ignored sections, and effects of color and size on attention. However, it necessitates specialized tracking equipment.</p>
                    </div>
                    <div className="details--box">
                        <h3>Blur Tests</h3>
                        <p>Blur tests, combined with eye-tracking and first-click methods, evaluate design elements like calls to action (CTAs) for their ability to attract user attention through color and layout. They involve showing users a blurred website image, with success gauged by their ability to identify specific elements.</p>
                    </div>
                    <div className="details--box">
                        <h3>Diary Studies</h3>
                        <p>Asking participants to keep a diary or journal documenting their experiences, interactions, and thoughts related to using a product or service over a specific period of time. Participants record their observations, feelings, frustrations, and successes as they engage with the product in their natural environment.</p>
                    </div>
                </div>
                <div style={{height:80}}></div>


                <h2>What are the basics elements of every interview?</h2>
                <p>In every interview, certain key elements play a crucial role in gathering valuable insights. These essentials include giving users tasks, asking questions, observing their actions, and understanding their behaviors. Let's delve into these fundamental elements that form the core of every successful interview, aiding researchers in making informed decisions.</p>
                <div style={{height:24}}></div>   
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Give them something to do</h3>
                        <p>Provide users with a specific task or activity to engage with, allowing them to interact with the product or service in a hands-on manner.</p>
                    </div>
                    <div className="details--box">
                        <h3>Ask Questions</h3>
                        <p>Engage in a conversation with users and pose questions aimed at gaining a deeper understanding of the challenges you both face together.</p>
                    </div>
                    <div className="details--box">
                        <h3>Watch What Happens</h3>
                        <p>Observe closely as users interact with the task, paying attention to their actions, reactions, and any challenges they encounter along the way.</p>
                    </div>
                    <div className="details--box">
                        <h3>Succeed, Hesitate or Fail</h3>
                        <p>Notice if users breeze through, pause, or face challenges.</p>
                    </div>
                    <div className="details--box">
                        <h3>Understanding</h3>
                        <p>Try to understand what’s behind their behaviors</p>
                    </div>
                </div>
                <div style={{height:48}}></div>   

                <h2>How do I recruit Participants?</h2>
                <p>Recruiting the right participants is essential for conducting effective user research and gathering valuable insights for product development. Whether you're targeting existing users, utilizing guerrilla testing methods, or leveraging online services, the recruitment process plays a crucial role in the success of your research efforts. Let's explore different strategies for recruiting participants to ensure the quality and relevance of your user studies.</p>
                <div style={{height:24}}></div>   
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Existing Users</h3>
                        <p>By leveraging your existing user base and employing various communication channels, you can effectively recruit participants for your interviews and gather valuable insights for your product development process.</p>
                        <ExpandableText label="Display Methods">
                            <ol>
                                <li><strong>E-mail Requests:</strong> Send out personalized emails to your current users, inviting them to participate in the interview process. Include details about the purpose of the interview and how their input will be valuable.</li>
                                <li><strong>Text Message Campaigns:</strong> Reach out to users via text messages, providing them with a brief overview of the interview opportunity and instructions on how to participate. Keep the message concise and engaging to encourage participation.</li>
                                <li><strong>Requests in Social Media Groups:</strong> If your product has associated social media groups or communities, post announcements or requests for interview participants. Engage with users in these groups to generate interest and encourage participation.</li>
                                <li><strong>Data Mining for Qualified Customers:</strong> Utilize customer data to identify individuals who meet specific criteria for the interview. This could include factors such as usage frequency, demographics, or specific product interactions. Reach out to these customers directly with personalized invitations to participate.</li>
                            </ol>
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Guerrilla Testing</h3>
                        <p>Guerrilla Testing is a straightforward approach to recruiting users by engaging with individuals in environments where they naturally congregate.</p>
                        <ExpandableText label="Display Methods">
                            <ol>
                                <li><strong>Select the Right Environment:</strong>  Choose locations where your target users are likely to be found, such as cafes, libraries, or public parks. Ensure that the environment is conducive to open communication and allows for uninterrupted testing sessions.</li>
                                <li><strong>Create a Relaxed Atmosphere:</strong>  Make participants feel comfortable and at ease by establishing a relaxed atmosphere. Approach them politely and explain the purpose of the test in a friendly manner. Encourage them to provide honest feedback and assure them that there are no right or wrong answers.</li>
                                <li><strong>Gain Approval:</strong>  Before conducting any testing activities, ensure that you have permission from the venue staff or authorities. Explain the nature of your testing and ask for their cooperation to avoid any disruptions.</li>
                                <li><strong>Check for Necessary Utilities:</strong>  Choose locations that offer the necessary utilities for conducting the test, such as seating areas, adequate lighting, and a quiet environment. Ensure that you have access to any technology or equipment needed for the testing process.</li>
                            </ol>
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Online Services</h3>
                        <p>Online services refer to platforms provided by companies that specialize in hosting their own user base for usability testing and research purposes. These platforms offer convenient solutions for businesses seeking to gather feedback from a diverse pool of participants.</p>
                        <ExpandableText label="Display Methods">
                            <ol>
                                <li><strong>Usertesting.com:</strong> Usertesting.com is a leading platform that allows businesses to conduct remote usability testing with real users. It offers a wide range of testing options, including website usability testing, prototype testing, and mobile app testing. Users can create customized test scenarios and recruit participants based on specific demographics or criteria. The platform provides detailed video recordings of user interactions, along with insightful feedback and analytics to help businesses optimize their products.</li>
                                <li><strong>Usability Hub:</strong> Usability Hub is a user research platform that offers various tools for gathering feedback on design concepts, prototypes, and existing products. It provides features such as five-second tests, preference tests, and click tests, allowing businesses to collect valuable insights quickly and efficiently. Usability Hub also offers options for recruiting participants from its user base or targeting specific demographics based on project requirements. The platform generates detailed reports and visualizations to help businesses interpret the feedback and make informed design decisions.</li>
                            </ol>
                        </ExpandableText>
                    </div>
                </div>
                <div style={{height:48}}></div> 


    
                <h2>Creating Interview Goals</h2>
                <p>Setting clear interview goals and crafting a structured discussion guide are essential steps in conducting effective one-on-one design research interviews. Here's how you can seamlessly integrate these processes:</p>
                <div style={{height:24}}></div>  
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Identify Behavioral Patterns</h3>
                        <p>Determine which behavioral patterns you aim to address through the interview process.</p>
                    </div>
                    <div className="details--box">
                        <h3>Establish Task Objectives</h3>
                        <p>Determine which behavioral patterns you aim to address through the interview process.</p>
                    </div>
                    <div className="details--box">
                        <h3>Consider Accessibility Concerns</h3>
                        <p>Define the specific tasks that users should be able to complete during the interview.</p>
                    </div>
                    <div className="details--box">
                        <h3>Set Performance Metrics</h3>
                        <p>Establish metrics to measure the success of the interview process and evaluate user feedback.</p>
                    </div>
                </div> 
                <div style={{height:48}}></div> 


                <h2>Crafting a Discussion Guide</h2>
                <p>A discussion guide serves as a structured script to guide you through the interview smoothly. Follow this simple structure:</p>
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Introductions (10 minutes)</h3>
                        <p>Create a comfortable atmosphere by introducing participants, outlining the purpose, and setting the tone.</p>
                        <ExpandableText label="Display Methods">
                            <ul>
                                <li>Keep introductions brief, spending no more than 10 minutes.</li>
                                <li>Obtain consent to record the session for internal purposes only.</li>
                                <li>Introduce everyone in the room without disclosing specific roles.</li>
                                <li>Invite participants to introduce themselves, sharing their background and interests.</li>
                            </ul>
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Getting to Know Your Participant (10 minutes)</h3>
                        <p>Gain insights into the participant's background, interests, and relevant perspectives.</p>
                        <ExpandableText label="Display Methods">
                            <ul>
                                <li>Engage participants in casual conversation to understand their hobbies and occupations.</li>
                                <li>Gather contextual information relevant to the test to enhance understanding.</li>
                            </ul>
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Detailed Questions or Exercises (20 minutes)</h3>
                        <p>Dive deep into specific topics using well-crafted questions or exercises to prompt thoughtful discussion.</p>
                        <ExpandableText label="Display Methods">
                            <ul>
                                <li>Provide participants with critical pointers, emphasizing that there are no right or wrong answers.</li>
                                <li>Encourage participants to verbalize their thoughts and actions to facilitate understanding.</li>
                                <li>Prioritize observation over verbal responses and refrain from providing assistance when participants encounter challenges.</li>
                            </ul>
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Observer Questions (10 minutes)</h3>
                        <p>Foster engagement by allowing participants to ask questions to each other, encouraging diverse viewpoints.</p>
                        <ExpandableText label="Display Methods">
                            <ul>
                                <li>Allow observers to pose questions to the participant, seeking additional insights during the test.</li>
                            </ul>                            
                        </ExpandableText>
                    </div>
                    <div className="details--box">
                        <h3>Interviewee Questions (10 minutes)</h3>
                        <p>Wrap up the discussion by inviting the interviewee to ask questions, providing closure and feedback.</p>
                        <ExpandableText label="Display Methods">
                            <ul>
                                <li>Encourage participants to ask questions, fostering engagement and addressing any concerns they may have.</li>
                                <li>Conclude the interview with a polite farewell, expressing gratitude for their participation.</li>
                            </ul>
                        </ExpandableText>
                    </div>
                </div>
                <div style={{height:24}}></div>   
                <p>By integrating interview goals with a structured discussion guide, you can conduct insightful design research interviews that yield valuable user feedback and drive product improvement.</p>
 

                <div style={{height:48}}></div>   

                <h2>Designating and Defining Interviewer Roles</h2>
                <p>In any interview or testing scenario, the effectiveness of the process heavily relies on clear delineation and understanding of roles among the team members involved. Designating and Defining Interviewer Roles is a crucial aspect of ensuring a smooth and productive interaction with participants.</p>
                <div style={{height:24}}></div>  
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Interviewer</h3>
                        <p>The primary role responsible for conducting the test, asking questions, and guiding the participant through the interview process.</p>
                    </div>
                    <div className="details--box">
                        <h3>Scribe</h3>
                        <p>Tasked with taking detailed notes if recording is not possible, ensuring that important insights and observations are documented.</p>
                    </div>
                    <div className="details--box">
                        <h3>Observers</h3>
                        <p>Individuals from the business with a stake in the test who wish to sit in on the interview to gather additional insights and perspectives.</p>
                    </div>
                </div>
                <div style={{height:24}}></div>  

                <div style={{height:24}}></div>   
                <h2>Responses to Avoid During Interviews</h2>
                <p>During interviews, it's crucial to steer clear of certain types of responses that can inadvertently hinder the depth and quality of insights gained. Let's explore some key examples of responses to avoid, along with better alternatives for more fruitful discussions.</p>
                <div style={{height:24}}></div>   
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Closed Questions</h3>
                        <p>Avoid questions that can be answered with a simple "yes" or "no," as they limit the depth of the response and may hinder valuable insights.</p>
                        <div className="details--exampleWrapper">
                            <div className="details--example">
                                <div className="details--exampleLabel">Bad</div> 
                                "Did you go out of town for the Holidays?" "Yes…"
                            </div>
                            <div className="details--example">
                                <div className="details--exampleLabel">Good</div> 
                                "What did you do on your Holiday?" "We went to California and spent some time on the beach.
                            </div>
                        </div>
                    </div>
                    <div className="details--box">
                        <h3>Leading Questions</h3>
                        <p>Refrain from asking questions that prompt or encourage the desired answer, as they can bias the participant's response.</p>
                        <div className="details--exampleWrapper">
                            <div className="details--example">
                                <div className="details--exampleLabel">Bad</div> 
                                <strong>Interviewee</strong> 
                                “I noticed this picture here.” 
                                <strong>Interviewer</strong>
                                “You mentioned that the picture was helpful... Which they ever actually did.”
                            </div>
                            <div className="details--example">
                                <div className="details--exampleLabel">Good</div> 
                                <strong>Interviewee</strong> 
                                “I noticed this picture here.” 
                                <strong>Interviewer</strong>
                                “You noticed the picture?”
                            </div>
                        </div>
                    </div>
                    <div className="details--box">
                        <h3>Questions with Many Conjunctions</h3>
                        <p>Avoid asking overly complex questions with multiple conjunctions, as they can confuse participants and dilute the clarity of the inquiry.</p>
                        <div className="details--exampleWrapper">
                            <div className="details--example"><div className="details--exampleLabel">Bad</div> “When you travel do you like to take public transportation or rent a car or maybe even catch a Lyft?"</div>
                            <div className="details--example"><div className="details--exampleLabel">Good</div> “What kind of transportation do you take when you travel?”</div>
                        </div>
                    </div>
                </div>
                <div style={{height:80}}></div>  


                <h2>Types of Questions to Ask:</h2>
                <p>Below, you'll find a curated list of prompts designed to elicit valuable insights from participants regarding their interactions with your product.</p>
                <div className="details--inline">
                    <div className="details--left">
                        <div style={{background:'#F9FAFC', display:'flex',flexWrap:'wrap',gap:16, padding:24}}>
                            <Parallax title="Tasks" lead="Can you show me how you would..." content="Prompt participants to demonstrate how they would complete specific actions or tasks within the product." />
                            <Parallax title="Participation" lead="Can you show me how I would..." content="Encourage participants to show how they would navigate or interact with the product, putting themselves in the user's shoes." /> 
                            <Parallax title="Demonstration" lead="Show us how to..." content="Request a demonstration of a particular feature or functionality to gain insights into user preferences and behavior." /> 
                            <Parallax title="Elaboration" lead="Tell me more about..." content="Invite participants to provide additional details or insights on a topic to deepen understanding and uncover hidden motivations." /> 
                            <Parallax title="Sequence" lead="Walk me through you typical day..." content="Ask participants to walk through their typical process or workflow, revealing patterns and pain points in their user journey." /> 
                            <Parallax title="Specific Examples" lead="What did you make?" content="Inquire about specific instances or experiences related to the product to gain concrete insights into user behavior." /> 
                            <Parallax title="Peer Comparison" lead="Do other companies do it this way?" content="Explore how participants perceive others' experiences or behaviors in comparison to their own, uncovering social influences and norms." /> 
                            <Parallax title="Expectation" lead="What did you expect to happen?" content="Probe participants about their expectations or anticipated outcomes when interacting with the product, revealing discrepancies between expectation and reality." /> 
                        </div>
                    </div>
                </div>
                <div className="details--inline">
                    <div className="details--left"><img src="/michael-stevens-five-minute-madness.png" alt="" /></div>
                    <div className="details--right">A rapid brainstorming activity aimed at generating creative ideas or solutions within a constrained timeframe. Typically, participants are given just five minutes to generate as many ideas as possible related to a specific problem or challenge. </div>
                </div>
                <div style={{height:48}}></div>  
                <h2>Reviewing the Interview</h2>
                <p>Do this as soon as possible after the interview. Critical observations will be lost in your memory if you delay too long. Complete your personal notes and store all notes on the interview in a central location. If you recorded the session, consider transcribing it.</p>
                <p>Discuss your first impressions based off the interview:</p>
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Surprising Findings</h3>
                        <p>Note anything unexpected or surprising that emerged during the interview. These could be insights that challenge your assumptions or shed new light on the problem at hand.</p>
                    </div>
                    <div className="details--box">
                        <h3>New Insights</h3>
                        <p>Identify any fresh perspectives or ideas that came to light during the interview. These could be innovative solutions, user behaviors, or needs that you hadn't previously considered.</p>
                    </div>
                    <div className="details--box">
                        <h3>Alignment with Expectations</h3>
                        <p>Evaluate whether the interview outcomes align with your initial expectations or hypotheses. Recognize any areas where your assumptions were validated and where they may need adjustment based on the user feedback.</p>
                    </div>
                </div>
                <div style={{height:24}}></div>  
                <p>After processing your impressions, proceed to create interview summaries:</p>
                <div style={{height:16}}></div>  
                <div className="details--boxes">
                    <div className="details--box">
                        <h3>Summarize Key Points</h3>
                        <p>Condense the main findings and observations from the interview into a concise summary. Highlight the most significant insights, trends, or patterns that emerged.</p>
                    </div>
                    <div className="details--box">
                        <h3>Extract Quotes and Reactions</h3>
                        <p>Pull out compelling quotes, noteworthy reactions, or impactful moments from the interview. These can serve as powerful anecdotes to illustrate key points or user experiences.</p>
                    </div>
                    <div className="details--box">
                        <h3>Present to Stakeholders</h3>
                        <p>Share the interview summaries, quotes, and reactions with relevant stakeholders. Emphasize positive reactions and insights that demonstrate the value of the research findings.</p>
                    </div>
                </div>
                <div style={{height:24}}></div>  
                <p>Remember that interviews don’t just happen during the interview, they are everything that comes before, during and after.</p>
                <div style={{height:48}}></div>   
                <h2>Helpful Hints:</h2>
                <ul>
                    <li>Nielsen’s law of diminishing returns states that 3-5 tests should be enough to highlight any main patterns, before doing another iteration.</li>
                    <li>Send out reminders prior to your meeting.</li>
                    <li>Limit the number of people in the interview to 3-4.</li>
                    <li>Document Everything</li>
                    <li>“Remember kids, the only difference between screwing around and science is writing it down.” – Adam Savage</li>
                    <li>Distrust Memory & Imagination.</li>
                    <li>Let there be silence, it may be uncomfortable.</li>
                    <li>Avoid Interruptions</li>
                    <li>Remember Etiquette
                        <ul>
                            <li>​​Discover the right amount of small talk.</li>
                            <li>Avoid talking about yourself.</li>
                        </ul>
                    </li>
                    <li>Be aware of your body language
                        <ul>
                            <li>Folded Arms, Avoiding eye contact, Appearing distracted all add to make the situation more uncomfortable for the participant</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
  };
  
  export default ProjectBroadcast;
  