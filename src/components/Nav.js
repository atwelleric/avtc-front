//  //  //  FUNCTIONALITY   //  //  //

import { useState } from 'react'
import { Link } from 'react-router-dom'


//  //  //  COMPONENTS    //  //  //

import MenuModal from './MenuModal'


//  //  //  STYLE SHEETS   //  //  //

import '../comp-css/nav.css'



export default function Nav() {
    
    // const [showMenu, setShowMenu] = useState()

    // const toggleMenu = () => {
    //     if (!showMenu) {
    //         return (<MenuModal/>);
    //         setShowMenu(true)
    //     } else {
    //         return (null);
    //         setShowMenu(false)
    //     }
    // }


    const seeMenu = () => {
        const [isShowing , setIsShowing] = useState(false);

        function toggleMenu() {
            setIsShowing(!isShowing);
        }

        return {
            isShowing,
            toggleMenu,
        }
    };

    return (
        <header>
            {/* <button className='menu-button' onClick={toggleMenu}>+</button>
            <Link className='links' to='/'>
                <button className='avtc-button'>AVTC</button>
            </Link> */}
            <h1 className='menu-button' role='button'>+</h1>
            <Link className='links' to='/' role='button'>
                <h1 className='avtc-button'>AVTC</h1>
            </Link>
        </header>
    )
}