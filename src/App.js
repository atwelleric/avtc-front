//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Frame, Scroll, useCycle } from 'framer'
import styled from 'styled-components'


//  //  //  COMPONENTS    //  //  //

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Nav from './components/Nav'
import PieceModal from './components/PieceModal'


//  //  //  VARIABLES   //  //  //

import { avtcContext } from './helperFunctions/avtcContext'
import { DBURL } from './helperFunctions/config'


//  //  //  STYLE SHEETS    //  //  //

import './App.css'


//  //  //  STYLED-COMPONENTS   //  //  //

const Body = styled.div`margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  background-color: #000000;
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  color: rgb(255, 255, 255);
  font-family: 'New Rocker';
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

  const openPiece = () => {
    setShowPiece(prev => !prev)
  }


  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
      <Nav />
      <PieceModal showPiece={showPiece} setShowPiece={setShowPiece} />
      <Switch>
          <Route exact path='/' component={Home} />
          <avtcContext.Provider value={ artists }>
            <Route exact path='/gallery' component={Gallery} />
          </avtcContext.Provider>
          <Route exact path='/:artistId' component={ArtistProfile} />
      </Switch>
    </div>
  )
}
