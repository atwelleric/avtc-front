//  //  //  FUNCTIONALITY   //  //  //

import styled from 'styled-components'
import { motion } from 'framer-motion'


//  //  //  COMPONENTS  //  //  //

import Services from './HomePage/Services'
import GalleryPeek from './HomePage/GalleryPeek'
import ArtistCards from './HomePage/ArtistCards'
import MerchandisePeek from './HomePage/MerchandisePeek'
import ContactUs from './HomePage/ContactUs'


//  //  //  STYLED-COMPONENTS   //  //  //

const HomePageSection = styled(motion.section)`
    margin-top: 10vh;
`

const HomeHeader = styled(motion.section)`
    margin-top: .5vh;
`


//  //  //  FUNCTION    //  //  //

export default function Home() {
    return (
        <>
            <HomePageSection>
                <HomeHeader>
                    <h1>SPECIALTY<br/>AMERICAN TRADITIONAL<br/>TATTOO SHOP</h1>
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