//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Frame, Scroll, useCycle } from 'framer'


//  //  //  COMPONENTS    //  //  //

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import MenuModal from './components/MenuModal'
import Nav from './components/Nav'
import PieceModal from './components/PieceModal'


//  //  //  VARIABLES   //  //  //

import { avtcContext } from './helperFunctions/avtcContext'
import { DBURL } from './helperFunctions/config'


//  //  //  STYLE SHEETS    //  //  //

import './App.css'






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




  //  //  //  MODAL TOGGLING    //  //  //


  const [showPiece, toggleShowPiece] = useState()

  // const useMenu = () => {
  //   const [isShowing, setIsShowing] = useCycle(false, true)

  //   funstion
  // }

  // const usePiece = () => {
  // }




  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
        <Nav />
        <MenuModal />
        {/* <PieceModal showPiece={showPiece} hide={toggleShowPiece} /> */}
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
