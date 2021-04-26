import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'


//  //  //  STYLED-COMPONENTS   //  //  //

const Margin = styled(motion.section)`
    margin-top: 10vh;
`

const Section = styled.section`
    /* overflow: hidden; */
    padding: 0;
    /* margin: 3vmin; */
    /* display: flex;
    justify-content: center;
    align-items: center; */

    /* margin: 0;
	padding: 0;
    -webkit-transform: translate(-50%, -50%);
    position: relative;
	left: 50%;
	top: 50%; */
`

const ItemContainer = styled(motion.ul)`
    
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    width: 100vmin;
    /* height: 90.009vmin; */
    max-width: 1000px;
    /* max-height: 1000px; */
    display: grid;
    grid-template-columns: repeat(3, 30%);
    /* grid-template-rows: repeat(2, 1fr); */
	/* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
    justify-content: center;
    align-content: center;
    gap: 2vmin;
    padding: 2vmin 0 2vmin 0;
    /* background: rgba(255, 255, 255, 0.07); */
    /* background: pink; */
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);


	border-top: 1px solid rgba(255, 255, 255, 0.7);
`

const Item = styled(motion.li)`
    /* width: 25.14433811802233vmin; */
    /* max-width: 333px; */
    /* width: 25.14433811802233vmin; */
    /* max-height: 333px; */
    /* background-color: rgba(0, 0, 0, 0.5); */

    width: 30vmin;
    height: 30vmin;
    max-width: 300px;
    max-height: 300px;

    overflow: hidden;
`

const Img = styled(motion.img)`
    display: block;

    /* min-width: inherit;
    min-height: inherit; */
    max-height: 50vmin;

    margin: 0;
	padding: 0;
    -webkit-transform: translate(-50%, -50%);
    position: relative;
	left: 50%;
	top: 50%;

    object-fit: cover;
    -webkit-filter: grayscale(0%) opacity(100%);
    filter: grayscale(0%) opacity(100%);
`

const PageTitle = styled.h1`
    width: 100%;
    font-size: 3vh;
    color: rgba(255, 255, 255, 0.7);
	text-transform: uppercase;
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

export default function ArtistCards() {


    //  //  //  DATA FETCHING FROM DB   //  //  //
  
    useEffect(() => {fetchGallery()}, []);

    const [ gallery, setGallery ] = useState([]);
  
    const fetchGallery = async () => {
      
      const gallData = await fetch(`${DBURL}/gallery`)
      const gall = await gallData.json();

      setGallery(gall);
      
    }


    //  //  //  PIECE SETTINGS    //  //  //

    const { setPiece } = useContext(PieceContext)
    const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)

    const fetchPiece = async (i) => {
      
        const picData = await fetch(`${DBURL}/gallery/${i}`)
        const pic = await picData.json();

        setPiece(
            {
                title: pic.title,
                slug: pic.slug,
                img: pic.art_image,
                artistSlug: pic.artist_id,
                artistName: pic.artist_name
            }
        )

        setShowPiece(!showPiece)

    }


    //  //  //  FUNCTIONS    //  //  //

    return (
        <>
            <Margin />
            <PageTitle>Our Work</PageTitle>
            <Section>
                <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {gallery.map((i) => (
                            <Item
                                key={i.slug}
                                variants={ItemAnimation}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => fetchPiece(i.slug)}
                                >
                                    <Img src={i.art_image} alt={i.title} id={i.slug} />
                            </Item>
                        ))}
                </ItemContainer>
            </Section>
        </>
    )
}