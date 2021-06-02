import React from 'react';
//Page component
import AboutSection from '../components/AboutSection'
import SevicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
//Animaition
import {motion} from "framer-motion"
import {pageAnimation} from '../animation'

import SrollTop from "../components/ScrollTop"

const AboutUS = () => {
    return (
        <motion.div 
         exit="exit"
         variants={pageAnimation} 
         initial="hidden" 
         animate="show" >
            <AboutSection/>
            <SevicesSection/>
            <FaqSection/>
            <SrollTop></SrollTop>
        </motion.div>
    )
}
export default AboutUS;
