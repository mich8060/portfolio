import Article from '../components/article';
import Intro from "../components/intro";
import Thinking from "../components/thinking";

function Writing(){
    return(
        <>
            <Intro>
                <h1>Crafting Engaging User Experiences through Wordsmithery!</h1>
                <p>Behold! My ramblings await your curious perusal below.</p>
            </Intro>
            <Thinking>
                <ul className="listview">
                    <li><Article href="https://www.michael-stevens.me/" title="Design Management Philosophy" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Creating a Unified Design Language" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Building a Design System" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Evolution to a Design Manager" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Building a Brand from the group up" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Hiring Product Designers" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="Defining & Evolving a Brands Illustrative Style" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="5 Tips for a Better Customer Experience" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                    <li><Article href="https://www.michael-stevens.me/" title="3 Ways to Build a Brand that Customers Love" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nunc, consectetur sed semper at, placerat id nibh. Morbi a augue sit amet felis." /></li>
                </ul>
            </Thinking>
        </>
    )
}

export default Writing;