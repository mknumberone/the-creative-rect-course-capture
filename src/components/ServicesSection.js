import React from 'react';
//Import Icon
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
//Styles
import { About, Description,Image } from '../styles'
import styled from 'styled-components';
//srcoll
import { reveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services  transition={{ duration: 0.75 }}
        ref={element}
        variants={reveal}
        animate={controls}
        initial="hidden">
            <Description>
                <h2>High <span>quality</span> dervices</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""></img>
            </Image>
        </Services>
    )
}
const Services = styled(About)`
h2{
    padding-bottom:5rem;
}
p{
    width:70%;
    padding:2rem 0 4rem 0;
}

`
const Cards = styled.div`
display:flex;
flex-wrap:wrap;
@media(max-width:1300px){
    justify-content:center;
    }
`
const Card = styled.div`
flex-basis:20rem;
.icon{
    display: flex;
    align-items:center;
}
h3{
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
}
h3:hover{
    background-color: #23d997;
    transition:0.4s;
    color:white;
}
`
export default ServicesSection;
