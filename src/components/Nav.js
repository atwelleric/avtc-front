//  //  //  FUNCTIONALITY   //  //  //

import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//  //  //  COMPONENTS    //  //  //

import MenuModal from './MenuModal'


//  //  //  STYLE SHEETS    //  //  //

// import '../comp-css/nav.css'


//  //  //  STYLED-COMPONENTS   //  //  //

const Header = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderContent = styled.div`
    width: 100vw;
    max-width: 1500px;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    z-index: 101;
    
`

const MenuButton = styled.button`
    z-index: 1000;
    cursor: pointer;

    border: none;
    padding: 4vmin;
    background-color: rgba(0, 0, 0, 0);
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 70px;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
    text-shadow: 0px 4px 4px black;
    font-family: 'New Rocker';

    line-height: 30px;
    box-sizing: padding-box;
`

const AVTCButton = styled.button`
    z-index: 1000;
    cursor: pointer;

    border: none;
    padding: 4vmin;
    background-color: rgba(0, 0, 0, 0);
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 24px;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
    text-shadow: 0px 4px 4px #000000;
    font-family: 'New Rocker';
`


//  //  //  COMPONENT   //  //  //

export default function Nav() {

    const [showMenu, setShowMenu] = useState(true)

    const openMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <>
            <header>
                {/* <button className='menu-button' onClick={toggleMenu}>+</button>
                <Link className='links' to='/'>
                    <button className='avtc-button'>AVTC</button>
                </Link> */}
                {/* <h1 className='menu-button' role='button'>+</h1>
                <Link className='links' to='/' role='button'>
                    <h1 className='avtc-button'>AVTC</h1>
                </Link> */}
            </header>
            <Header>
                <HeaderContent>
                    <MenuButton onClick={openMenu}>+</MenuButton>
                    <AVTCButton>AVTC</AVTCButton>
                </HeaderContent>
            </Header>
            <MenuModal showMenu={showMenu} setShowMenu={setShowMenu}/>
        </>
    )
}