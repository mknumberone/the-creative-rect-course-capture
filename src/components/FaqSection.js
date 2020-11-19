import React from 'react';
import styled from 'styled-components'
import {About,Description,Hide,Image} from '../styles'
const FaqSection = () => {
    return (
      <Faq>
            <h2>Any Question <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedula</h4>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            
            <div className="question">
                <h4>Differrent Payment Method</h4>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What product do you Offer?</h4>
                <div className="answer">
                    <p>Lorem Ipsum is simply dummy text.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
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
    padding:3rem 0rem;
    cursor: pointer;
}
.awser{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`
export default FaqSection
