import React from 'react';
import home1 from '../img/home1.png'
//framer motion
import {motion} from 'framer-motion';
import {About,Description,Hide,Image} from '../styles'
import {titleAnim,container,fade,photoAnim, } from "../animation"
import Wave from './Wave'
const AboutSection = () => {
    return (
        <About>
            <Description >
                <motion.div variants={container} initial="hidden" animate="show"  className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skill</motion.p>
                <motion.button  variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"></motion.img>
            </Image>
            <Wave/>
        </About>
    )
}
//Styled Components 
// const About = styled.div`
//  min-height:90vh;
//  display: flex;
//  align-items:center;
//  justify-content:space-between;
//  padding:5rem 10rem;
//  color:white;
// `
// const Description = styled.div`
//  flex:1;
//  padding-right:5rem;
//  h2{
//      font-weight:lighter;
//  }
// `
// const Image = styled.div`
// flex: 1;
// overflow:hidden;
// img{
//     width:100%;
//     height:80vh;
//     object-fit:cover;
// }
// `
// const Hide = styled.div`
// overflow:hidden;
// `
export default AboutSection;
