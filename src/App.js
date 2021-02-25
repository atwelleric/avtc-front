import { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Frame, Scroll, useCycle } from 'framer'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PieceModal from './components/PieceModal'

import { avtcContext } from './helperFunctions/avtcContext'
import { DBURL } from './helperFunctions/config'

import main_bg_img from './images/BGImg.png'
import bottom_bg_img from './images/streetViewCrop.png'

import './App.css'




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

  useEffect(() => {fetchData()}, []);

  const [artists, setArtists] = useState([]); 
  // const [gallery, setGallery] = useState([]);

  const fetchData = async () => {
    
    const charData = await fetch(`${DBURL}/characters`)
    const char = await charData.json();
    setArtists(char)
    // console.log(artists[0].name)

    // const gallery = [];
    // artists.map((artist) => {
    //   gallery.push(artist.img)
    // })
    // setGallery(gallery);
    // console.log(gallery)
    
  }

  // useEffect(() => {
	// 	console.log(artists[0].name);
	// }, []);



  
  //  //  //  DATA SORTING FOR APP MEMORY   //  //  //

  // const providerArtists = useMemo(() => ({ artists, setArtists }), [artists, setArtists])
  // const providerGallery = useMemo(() => ({ gallery, setGallery }), [gallery, setGallery])


  //  //  //  PIECEMODAL TOGGLING    //  //  //

  const [showPiece, setShowPiece] = useState(false)

  const togglePieceView = () => {
    setShowPiece(prev => !prev)
  }


  //  //  //  TESTING VALUE CHANGES PASSED THROUGH CONTEXT  //  //  //

  // const msg = 'hello from App.js'

  // const [state, setState] = useState({
  //   a: undefined,
  //   b: "b",
  //   index: 0
  // });

  // setTimeout(() => {
  //   const { index } = state;
  //   if (index % 2 === 0) {
  //     setState({ ...state, index: index + 1, a: `a${index}`, b: `b${index}` });
  //   } else {
  //     setState({ ...state, index: index + 1, a: `a${index}` });
  //   }
  // }, 1000);

  // // const [artists, setArtists] = useState([]);

  //   useEffect(() => {
  //       //When a changes we need to execute
  //       //specific logic for a and other vars of the state.
  //       //Which is not described here and that's the reason
  //       //why we need 2 different useEffects
  //       setArtists(artists => (artists));
  //       // console.log(artists[0].name)
  //     }, [artists]);

  


  const [msg, setMsg] = useState('hello from context')

  const msgValue = useMemo(() => ({ msg, setMsg }), [msg, setMsg])



  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
      <NavBar />
      {/* <h1>{artists[0].name}</h1> */}
      <PieceModal showPiece={showPiece} setShowPiece={setShowPiece} />
      <MainBGImg 
        src={main_bg_img}
        // src={artists[0].img}
        />
      <Switch>
        <avtcContext.Provider 
          // value={artists[0].name} 
          // value={state.artists[0].name}
          // value={{ msg, setMsg }}
          value={{ artists }}
          >
          <Route exact path='/' component={Home} artists={artists} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/:artistId' component={ArtistProfile} />
        </avtcContext.Provider>
      </Switch>
      <BottomBGImg src={bottom_bg_img}/>
    </div>
  )
}
