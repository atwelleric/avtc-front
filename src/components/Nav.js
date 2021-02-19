//  //  //  FUNCTIONALITY   //  //  //

import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCycle } from 'framer'
import { motion } from 'framer-motion'


//  //  //  COMPONENTS    //  //  //

import MenuModal from './MenuModal'


//  //  //  IMAGES  //  //  //

import menu from '../images/+.png'
import AVTC from '../images/AVTC.png'


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

const MenuButton = styled(motion.div)`
    z-index: 1000;
    cursor: pointer;

    border: none;
    padding: 4vmin;
    background-color: rgba(0, 0, 0, 0);
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 70px;
    /* -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
    text-shadow: 0px 4px 4px black;
    font-family: 'New Rocker'; */

    line-height: 30px;
    box-sizing: padding-box;
`

const AVTCButton = styled(motion.div)`
    z-index: 1000;
    cursor: pointer;

    border: none;
    padding: 4vmin;
    background-color: rgba(0, 0, 0, 0);
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 24px;
    /* -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
    text-shadow: 0px 4px 4px #000000;
    font-family: 'New Rocker'; */
`

const MenuImg = styled.img`
    display: block;
    margin: auto;
    max-width: 36px;
    height: auto;
    
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`

const AVTCImg = styled.img`
    display: block;
    margin: auto;
    max-width: 75px;
    height: auto;
    
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`



//  //  //  COMPONENT   //  //  //

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false)

    const [animate, cycle] = useCycle(
        {rotate: 0},
        {rotate: 45}
    )

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
        cycle()
    }


    
    return (
        <>
            <Header>
                <HeaderContent>
                    <MenuButton id='menuToggleButton' class="btn" role="button" aria-pressed="false" tabindex="0"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        animate={animate} 
                        onClick={toggleMenu}>
                        <Link>
                            <MenuImg id='menuImage' src={menu} alt="menu"/>
                        </Link>
                    </MenuButton>
                    <AVTCButton id='mainHomeButton' class="btn" role="button" aria-pressed="false" tabindex="0"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }} 
                        onClick={() => showMenu ? toggleMenu() : null}>
                        <Link className='links' to='/'>
                            <AVTCImg id='avtcImage' src={AVTC} alt="AVTC"/>
                        </Link>
                    </AVTCButton>
                </HeaderContent>
            </Header>
            <MenuModal showMenu={showMenu} setShowMenu={setShowMenu} toggleMenu={toggleMenu}/>
        </>
    )
}