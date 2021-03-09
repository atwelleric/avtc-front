import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { PieceContext, PieceModalToggleContext } from '../helperFunctions/avtcContext'
import { DBURL } from '../helperFunctions/config'


//  //  //  STYLED COMPONENTS   //  //  //

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    z-index: 10;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
`

const SubContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.07);

    border-radius: 2vmin;
`

const Img = styled(motion.img)`
    max-width: 70vmin;
    max-height: 70vmin;
    overflow: hidden;

    border-radius: 2vmin 2vmin 0 0;
`

const PieceTitle = styled(motion.h1)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 17px;
    letter-spacing: 1px;

    padding: 2vmin 10vmin;
    margin: 0;
    margin-top: 5vmin;

    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`

const PieceArtist = styled(motion.h1)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    letter-spacing: 1px;

    padding: 2vmin 10vmin;
    margin: 0;
    margin-bottom: 5vmin;

    -webkit-filter: drop-shadow(0px 2px 2px #000000);
    filter: drop-shadow(0px 2px 2px #000000);
`



//  //  //  VARIABLES   //  //  //

const ItemContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1
        },
        delay: .5
    }
};
  
const ItemAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


//  //  //  FUNCTION    //  //  //


export default function PieceModal() {


    //  //  //  PIECE SETTINGS    //  //  //

    const { piece } = useContext(PieceContext)
    const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)



    return (
        <>
            {showPiece ?
                <Container
                    variants={ItemContainerAnimation}
                    transition={{ duration: .2 }}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setShowPiece(!showPiece)}
                    >
                    <SubContainer 
                        variants={ItemAnimation}
                        initial="hidden"
                        animate="visible"
                        >
                        <Img
                            src={piece.img}
                            alt={piece.title}
                            // variants={ItemAnimation}
                            // transition={{ duration: 0.2 }}
                            />
                        <PieceTitle
                            // variants={ItemAnimation}
                            // transition={{ duration: 0.2 }}
                            >
                            {piece.title}
                        </PieceTitle>
                        <Link key={piece.artistSlug} to={`/${piece.artistSlug}`}>
                            <PieceArtist
                                // variants={ItemAnimation}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.1 }}
                                >
                                    View {piece.artistName}'s Profile
                            </PieceArtist>
                        </Link>
                    </SubContainer>
                </Container>
            : null}
        </>
    )
}