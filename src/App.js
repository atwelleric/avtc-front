//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect, useMemo, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Frame, Scroll, useCycle } from 'framer'


//  //  //  COMPONENTS    //  //  //

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import MenuModal from './components/MenuModal'
import Nav from './components/Nav'
import PieceModal from './components/PieceModal'


//  //  //  VARIABLES   //  //  //

import { DBURL } from './config'


//  //  //  STYLE SHEETS    //  //  //

import './App.css'




//  //  //  FUNCTIONS    //  //  //

export default function App() {



  
  //  //  //  DATA FETCHING FROM DB   //  //  //

  const [artists, setArtists] = useState([]);
  const [gallery, setGallery] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
    

  //   const artistsData = await fetch(`${DBURL}/artists`)
  //   const artists = await artistsData.json();
  //   setArtists(artists)
  //   // console.log(artists)


  //   // check actual results of the following function
  //   let gallery = [];
  //   artists.map((artist) => {
  //     gallery.push(artist.gallery) {/* check actual addresses with database composition */}
  //     setGallery(gallery);
  //   })
  //   // console.log(gallery
    

  // }

  
  
  
  //  //  //  DATA SORTING FOR APP MEMORY   //  //  //

  const providerArtists = useMemo(() => ({ artists, setArtists }), [artists, setArtists])
  const providerGallery = useMemo(() => ({ gallery, setGallery }), [gallery, setGallery])




  //  //  //  MODAL TOGGLING    //  //  //

  const [showMenu, toggleShowMenu] = useState()
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
      <MenuModal showMenu={showMenu} hide={toggleShowMenu} />
      <PieceModal showPiece={showPiece} hide={toggleShowPiece} />
      <Nav />
      <Switch>
        {/* <avtcContext.Provider value={ providerArtists, ProviderGallery }> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/:artistId' component={ArtistProfile} />
        {/* </avtcContext.Provider> */}
      </Switch>
    </div>
  )
}
