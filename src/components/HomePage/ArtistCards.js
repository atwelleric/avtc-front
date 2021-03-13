import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from '../../helperFunctions/config'

import iconCalendar from '../../images/iconCalendar.png'


//  //  //  STYLED COMPONENTS   //  //  //

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: grid;
    justify-items: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
`

const Section = styled.section`
    /* overflow: hidden; */
    padding: 0;
    margin: 3vmin;

    /* margin: 0;
	padding: 0;
    -webkit-transform: translate(-50%, -50%);
    position: relative;
	left: 50%;
	top: 50%; */                                            ¸

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
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
	/* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
    justify-content: center;
    align-content: center;
    gap: 2vmin;
    padding: 2vmin;
    /* background: rgba(255, 255, 255, 0.07); */
    background: pink;
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
    /* border-radius: 30px; */
    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);


	/* border-top: 1px solid rgba(255, 255, 255, 0.7); */
`

const Item = styled(motion.li)`
    /* width: 25.14433811802233vmin; */
    /* max-width: 333px; */
    /* width: 25.14433811802233vmin; */
    /* max-height: 333px; */
    /* background-color: rgba(0, 0, 0, 0.5); */

    width: 90vmin;
    height: 90vmin;
    max-width: 900px ;
    max-height: 900px ;

    overflow: hidden;
`

const Img = styled(motion.img)`
    display: block;

    /* min-width: inherit;
    min-height: inherit; */
    max-height: 90vmin;

    margin: 0;
	padding: 0;
    -webkit-transform: translate(0%, -50%);
    position: relative;
	/* left: 0%;
	top: 50%; */

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


export default function ArtistCards() {


    //  //  //  DATA FETCHING FROM DB   //  //  //
  
    useEffect(() => {fetchArtists()}, []);

    const [ artists, setArtists ] = useState([]);
  
    const fetchArtists = async () => {
      
      const rtstsData = await fetch(`${DBURL}/artists`)
      const rtsts = await rtstsData.json();

      setArtists(rtsts);
    //   console.log(rtsts)
      
    }


    //  //  //  FUNCTIONS    //  //  //
    
    return (
        <>
            <Container>
                <PageTitle>Resident Artists</PageTitle>
                <Section>
                    <ItemContainer
                        variants={ItemContainerAnimation}
                        initial="hidden"
                        animate="visible"
                        >
                            {/* {artists.map((i) => (
                                <Link key={i.slug} to={`/${i.slug}`}>
                                    <Item
                                        variants={ItemAnimation}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        >
                                            <Img src={i.profile_image} alt={i.profile_image} id={i.slug} />
                                            <h1>{i.name}</h1>
                                    </Item>
                                </Link>
                            ))} */}
                    </ItemContainer>
                </Section>
            </Container>
        </>
    )
}