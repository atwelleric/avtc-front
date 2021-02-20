//  //  //  FUNCTIONALITY   //  //  //

import styled from 'styled-components'
import { motion } from 'framer-motion'


//  //  //  COMPONENTS  //  //  //

import Services from './HomePage/Services'
import GalleryPeek from './HomePage/GalleryPeek'
import ArtistCards from './HomePage/ArtistCards'
import MerchandisePeek from './HomePage/MerchandisePeek'
import ContactUs from './HomePage/ContactUs'


//  //  //  IMAGES  //  //  //

import HeaderImg from '../images/HomeHeader.png'


//  //  //  STYLED-COMPONENTS   //  //  //

const HomePageSection = styled(motion.section)`
    margin-top: 10vh;
`

const HomeHeader = styled(motion.section)`
    padding-top: 5vh;
    text-align: center;
`

const HomeHeaderImg = styled.img`
    width: 80vw;
    max-width: 550px;
    
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out; 
`


//  //  //  FUNCTION    //  //  //

export default function Home() {
    return (
        <>
            <HomePageSection>
                <HomeHeader>
                    <HomeHeaderImg id='HomeHeaderImg' src={HeaderImg} alt="Specialty American Traditional Tattoo Shop"/>
                </HomeHeader>
            </HomePageSection>
            <HomePageSection><Services/></HomePageSection>
            <HomePageSection><GalleryPeek/></HomePageSection>
            <HomePageSection><ArtistCards/></HomePageSection>
            <HomePageSection><MerchandisePeek/></HomePageSection>
            <HomePageSection><ContactUs/></HomePageSection>
        </>
    )
}