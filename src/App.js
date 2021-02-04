//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect, useMemo, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'


//  //  //  COMPONENTS    //  //  //

import ArtistProfile from './components/ArtistProfile'
import Gallery from './components/Gallery'
import Home from './components/Home'
import MenuModal from './components/MenuModal'
import PieceModal from './components/PieceModal'


//  //  //  VARIABLES   //  //  //

import { DBURL } from './config'


//  //  //  STYLE SHEETS    //  //  //

import './App.css'




//  //  //  FUNCTION    //  //  //

export default function App() {



  
  //  //  //  DATA FETCHING FROM DB   //  //  //

  const [artists, setArtists] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    

    const artistsData = await fetch(`${DBURL}/artists`)
    const artists = await artistsData.json();
    setArtists(artists)
    // console.log(artists)


    // check actual results of the following function
    let gallery = [];
    artists.map((artist) => {
      gallery.push(artist.gallery) {/* check actual addresses with database composition */}
      setGallery(gallery);
    })
    // console.log(gallery
    

  }

  
  
  
  //  //  //  DATA SORTING FOR APP MEMORY   //  //  //

  const providerArtists = useMemo(() => ({ artists, setArtists }), [artists, setArtists])
  const providerGallery = useMemo(() => ({ gallery, setGallery }), [gallery, setGallery])




  //  //  //  MODAL TOGGLING    //  //  //

  const [showMenu, toggleShowMenu] = useState()
  const [showPiece, toggleShowPiece] = useState()




  //  //  //  RENDER    //  //  //

  return (
    <div className="App">
      <MenuModal showMenu={showMenu} hide={toggleShowMenu} />
      <PieceModal showPiece={showPiece} hide={toggleShowPiece} />
      <Switch>
        {/* <avtcContext.Provider value={ providerArtists, ProviderGallery }> */}
          <Route exact path='/:artistId' component={ArtistProfile} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/' component={Home} />
        {/* </avtcContext.Provider> */}
      </Switch>
    </div>
  )
}
