import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
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
    justify-items: stretch;
    gap: 2vmin;
    padding: 2vmin;
    background: rgba(255, 255, 255, 0.07);
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const Item = styled(motion.li)`
    /* width: 25.14433811802233vmin; */
    /* max-width: 315.31px; */
    /* width: 25.14433811802233vmin; */
    /* max-height: 315.31px; */
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
`

const Img = styled(motion.img)`
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
`

const ItemTitle = styled.h1`
    font-size: 15px;
    width: 100%;
`

const Li = styled(motion.li)`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;

    border: 1px solid rgba(255, 255, 255, 0.3);
    display: grid;
    align-items: center;
    justify-content: center;
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

export default function GalleryPeek() {


    //  //  //  DATA FETCHING FROM DB   //  //  //
  
    useEffect(() => {fetchArtists()}, []);

    const [ artists, setArtists ] = useState([]);
  
    const fetchArtists = async () => {
      
      const rtstsData = await fetch(`${DBURL}/characters`)
      const rtsts = await rtstsData.json();

      setArtists(rtsts);
      
    }


    //  //  //  PIECE SETTINGS    //  //  //

    const { piece, setPiece } = useContext(PieceContext)
    const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)

  
    const fetchArtist = async (i) => {
      
        const rtstData = await fetch(`${DBURL}/characters/${i}`)
        const rtst = await rtstData.json();

        // setArtist(rtst[0]);

        setPiece(
            {
                name: rtst[0].name,
                img: rtst[0].img,
                id: rtst[0].char_id
            }
        )
        setShowPiece(!showPiece)

    }


    //  //  //  FUNCTIONS    //  //  //

    return (
        <>
            <Section>
                <ItemContainer
                    variants={ItemContainerAnimation}
                    initial="hidden"
                    animate="visible"
                    >
                        {artists.slice(0,4).map((i) => (
                            <Item
                                key={i.char_id}
                                variants={ItemAnimation}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => fetchArtist(i.char_id)}
                                >
                                    <Img src={i.img} alt={i.name} id={i.char_id} />
                            </Item>
                        ))}
                        <Li 
                            variants={ItemAnimation}
                            whileHover={{ scale: 1.05 }}>
                            <Link to='/gallery'>
                                VIEW FULL GALLERY
                            </Link>
                        </Li>
                        {artists.slice(5,9).map((i) => (
                            <Item
                                key={i.char_id}
                                variants={ItemAnimation}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => fetchArtist(i.char_id)}
                                >
                                    <Img src={i.img} alt={i.name} id={i.char_id} />
                            </Item>
                        ))}
                </ItemContainer>
            </Section>
        </>
    )
}