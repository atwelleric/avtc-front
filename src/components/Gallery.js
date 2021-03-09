import { motion } from 'framer-motion'
import styled from 'styled-components'

import GalleryCarousel from './GalleryCarousel'

import bottom_bg_img from '../images/streetViewCrop.png'


//  //  //  STYLEC COMPONENTS   //  //  //

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: grid;
    justify-items: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
`

const BottomBGImg = styled(motion.img)`
    z-index: -90;

    width: 100vw;
    /* max-width: 1000px; */


    margin: 0;
    padding: 0;
    -webkit-transform: translate(-50%, -100%);
    position: absolute;
    left: 50%;
    top: 100%;

    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const CarouselContainer = styled.div`
    height: 50vmin;
    width: 50vmin;
    background-color: pink;


    margin: 0;
    padding: 0;
    -webkit-transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
`


export default function Gallery() {
    
    
    
    return (
        <>
            <Container>
                <CarouselContainer>
                    <GalleryCarousel />
                </CarouselContainer>
                <BottomBGImg src={bottom_bg_img} />
            </Container>
        </>
    )
}