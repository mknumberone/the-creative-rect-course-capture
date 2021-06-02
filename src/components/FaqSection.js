import React from 'react';
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import { reveal } from '../animation';
import { useScroll } from './useScroll';
const FaqSection = () => {
    const [element,controls]=useScroll()
    return (
        <Faq    transition={{ duration: 0.5 }}
        ref={element}
        animate={controls}
        initial="hidden"
        variants={reveal}>
            <h2>Any Question <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos libero, rerum, enim nesciunt, a dicta pariatur necessitatibus in veritatis nisi voluptatem!
                        Autem esse tenetur natus iusto magnam repudiandae ad consequuntur.</p>
                </div>
            </Toggle>
            <Toggle title='Daily Schedula'>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione consectetur voluptates quasi. Doloremque natus illum sequi
                    laboriosam dolorem provident sit molestiae est maxime asperiores sint,
                   fugit eaque distinctio quibusdam earum?</p>
                </div>
            </Toggle>
            <Toggle title='Differrent Payment Method'>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione consectetur voluptates quasi. Doloremque natus illum sequi
                    laboriosam dolorem provident sit molestiae est maxime asperiores sint,
                         fugit eaque distinctio quibusdam earum?</p>
                </div>
            </Toggle>
            <Toggle title='What product do you Offer?'>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione consectetur voluptates quasi. Doloremque natus illum sequi
                    laboriosam dolorem provident sit molestiae est maxime asperiores sint,
                        fugit eaque distinctio quibusdam earum?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}
const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}
.faq-line{
    background: #cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100% ;
}
.question{
    padding:1rem 0rem;
    cursor: pointer;
}
.awser{
    padding:1rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`
export default FaqSection
