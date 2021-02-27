import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { avtcContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'


//  //  //  STYLED-COMPONENTS   //  //  //

const Section = styled.section`
    overflow: hidden;
    padding: 0;
    margin: 3vmin;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemContainer = styled(motion.ul)`
    
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    width: 100vmin;
    height: 90.009vmin;
    max-width: 1000px;
    max-height: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
	/* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
    justify-items: center;
    align-items: center;
    gap: 2vmin;
    padding: 2vmin;
    background: rgba(255, 255, 255, 0.07);
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const Item = styled(motion.li)`
    width: 21.006vmin;
    height: 21.006vmin;
    background-color: pink;
    overflow: hidden;
`

const Img = styled(motion.img)`
    width: 100%;
`

const ItemTitle = styled.h1`
    font-size: 15px;
`


//  //  //  VARIABLES   //  //  //

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

export default function GalleryPeekAlt() {


    //  //  //  DATA FETCHING FROM DB   //  //  //
  
    useEffect(() => {fetchGalleryPeek()}, []);

    const [gallery, setGallery] = useState([]);
  
    const fetchGalleryPeek = async () => {
      
      const rtstsData = await fetch(`${DBURL}/characters`)
      const rtsts = await rtstsData.json();
  
      const imgs = [];
      rtsts.map((rtst) => {
        imgs.push(rtst.img)
      })
      setGallery(imgs);
  
      // console.log(artists)
      // console.log(gallery)
      
    }

    
    return (
        <>
            <Section>
                <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {gallery.slice(0,9).map((i) => (
                        <Item 
                            key={i} 
                            variants={ItemAnimation}
                            whileHover={{ scale: 1.05 }}
                            >
                            {/* <Img src={i} alt={i} id={i}/> */}
                        </Item>
                        ))}
                </ItemContainer>
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