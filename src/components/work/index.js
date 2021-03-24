import React from "react"
import "./work.scss"

import Container from '../container/'
import Display from '../display/'
import Heading from '../heading/'
import Subtitle from '../subtitle/'

function Work(){
    return(
        <Container theme="dark">
            <Subtitle>Work</Subtitle>
            <Display>I have designed for brands such as Pluralsight, Backcountry, Skullcandy, Competitive Cyclist &amp; Jason's Deli.</Display>
            <Heading>
                In the past seventeen years I have made great efforts to continually develop,
                grow and achieve success in all aspects of both design & business knowledge.
            </Heading>
        </Container>
    )
}

export default Work