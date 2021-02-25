import { useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { avtcContext } from '../../helperFunctions/avtcContext'


//  //  //  STYLED-COMPONENTS   //  //  //

const Section = styled.section`
    /* background-color: red; */

    /* width: 100vw; */
    /* height: 100vh; */
    overflow: hidden;
    padding: 0;
    margin: 3vmin;
    display: flex;
    justify-content: center;
    align-items: center;

    /* max-width: 1500px; */
`

const ItemContainer = styled(motion.ul)`
    /* width: 100vw;
    max-width: 1500px;
    align-items: center;
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */

    /* width: 10vmin; */
    /* height: 10vmin; */
    display: grid;
    overflow: hidden;
    margin: 0;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.), rgba(255, 255, 255, 0.171), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0));
    border-radius: 30px;
`

const Item = styled(motion.li)`
	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
`

const Img = styled(motion.img)`
    width: 18vmin;
`


//  //  //  VARIABLES   //  //  //

const services = [
    [null, 'Tattoo'],
    [null, 'Tattoo Design'],
    [null, 'Tattoo Cover-Up'],
    [null, 'Micro Blading']
]

const ItemContainerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5
        }
    }
};
  
const ItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


//  //  //  FUNCTION    //  //  //

export default function GalleryPeek() {

    
    return (
        <>
            <Section>
                {/* <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {artists.slice(0,10).map((i) => (
                        <Item 
                            key={i.char_id} 
                            variants={ItemAnimation}
                            whileHover={{ scale: 1.05 }}
                            >
                            <Img src={i.img} alt={i.name} id={i.name}/>
                        </Item>
                        ))}
                </ItemContainer> */}
            </Section>
            {/* <section id='galleryPeek' className='home-page-sections'>
                <h1 id='galleryPeekTitle'>OUR WORK</h1>
                <div id='galleryPeekGrid'>
                    <div id='linkToGalleryPage'>
                        <h5 className='visit-our-gallery-button'>VISIT OUR<br/>GALLERY</h5>
                    </div>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                </div>
            </section> */}
        </>
    )
}