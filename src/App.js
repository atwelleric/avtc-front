//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Frame, Scroll, useCycle } from 'framer'
import styled from 'styled-components'
import { motion } from 'framer-motion'


//  //  //  COMPONENTS    //  //  //

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PieceModal from './components/PieceModal'


//  //  //  VARIABLES   //  //  //

import { avtcContext } from './helperFunctions/avtcContext'
import { DBURL } from './helperFunctions/config'


//  //  //  STYLE SHEETS    //  //  //

import './App.css'


//  //  //  IMAGES  //  //  //

import main_bg_img from './images/BGImg.png'
import bottom_bg_img from './images/streetViewCrop.png'


//  //  //  STYLED-COMPONENTS   //  //  //

const Body = styled.div`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* background-color: #000000; */
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  color: rgb(255, 255, 255);
  font-family: 'New Rocker';
`

//  // FOR STUDY  //  //
// const MainBGImg = styled(motion.div)`
//   z-index: -100;
//   height: 100vh;
//   background: url(${BGImg}) center center no-repeat;
// 	background-attachment: fixed;
// 	background-size: cover;
// 	background-blend-mode: saturation;
// 	background-color: rgba(0, 0, 0, 0.646);
// `

const MainBGImg = styled(motion.img)`
  z-index: -100;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vmax;

  -webkit-transform: translate(-50%, 0%);
  position: fixed;
  overflow: hidden;
  left: 50%;
  top: 0%;
  filter: blur(6px) brightness(40%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) opacity(69%);
`

const BottomBGImg = styled(motion.img)`
  z-index: -90;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  
  -webkit-transform: translate(0%, 0%);
  /* position: fixed; */
  /* overflow: hidden; */
  left: 50%;
  bottom: 0%;
`



//  //  //  FUNCTIONS    //  //  //

export default function App() {


  //  //  //  DATA FETCHING FROM DB   //  //  //

  const [artists, setArtists] = useState([]); 
  const [gallery, setGallery] = useState([]); 


  useEffect(() => { fetchData() }, []);


  const fetchData = async () => {
    
    const artistsData = await fetch(`${DBURL}/characters`)
    const artists = await artistsData.json();
    setArtists(artists)
    // console.log(artists)

    const gallery = [];
    artists.map((artist) => {
      gallery.push(artist.img)
    })
    setGallery(gallery);
    // console.log(gallery)
    
  }

  
  //  //  //  DATA SORTING FOR APP MEMORY   //  //  //

  // const providerArtists = useMemo(() => ({ artists, setArtists }), [artists, setArtists])
  // const providerGallery = useMemo(() => ({ gallery, setGallery }), [gallery, setGallery])


  //  //  //  PIECEMODAL TOGGLING    //  //  //

  const [showPiece, setShowPiece] = useState(false)

  const togglePieceView = () => {
    setShowPiece(prev => !prev)
  }


  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
      <NavBar />
      <PieceModal showPiece={showPiece} setShowPiece={setShowPiece} />
      <MainBGImg src={main_bg_img}/>
      <Switch>
          <Route exact path='/' component={Home} />
          <avtcContext.Provider value={ artists }>
            <Route exact path='/gallery' component={Gallery} />
          </avtcContext.Provider>
          <Route exact path='/:artistId' component={ArtistProfile} />
      </Switch>
      <BottomBGImg src={bottom_bg_img}/>
    </div>
  )
}
