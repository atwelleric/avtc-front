import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


//  //  //  STYLED-COMPONENTS   //  //  //

const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 50;
    top: 0;
    position: fixed;
    background: linear-gradient(180deg, rgba(255, 206, 132, 0.9) -3.44%, rgba(255, 207, 135, 0.41) 79.87%, rgba(255, 207, 135, 0.33144) 93.74%, rgba(255, 207, 135, 0.28) 100%), rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(15px);
`

const UL = styled(motion.ul)`
    margin-block-start: 0;
    margin-block-end: 0;
    list-style: none;
    padding: 0;
    text-align: center;
`

const LI = styled(motion.li)`
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
	color: inherit;
	text-decoration: none;

    padding: 3vmin;
`

const A = styled.a`
	color: inherit;
	text-decoration: none;

    font-size: 18px;
    letter-spacing: 0.105em;
    color: rgba(255, 255, 255, .75);
    
    /* -webkit-text-fill-color: #000000;
    -webkit-text-stroke-color: rgba(255, 255, 255, 1);
    -webkit-text-stroke-width: 1px; */
    text-shadow: 0px 2px 2px rgba(0, 0, 0, .5);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`


//  //  //  COMPONENT   //  //  //

export default function MenuModal({ showMenu, setShowMenu, toggleMenu }) {

    const [focusHome, setFocusHome] = useState(false)
    const [focusGallery, setFocusGallery] = useState(false)
    const [focusResidentArtists, setFocusResidentArtists] = useState(false)
    const [focusMerchandise, setFocusMerchandise] = useState(false)
    const [focusContactUs, setFocusContactUs] = useState(false)


    return (
        <>
            {showMenu ? 
                <Container>
                    <UL className='menu-links'>
                        <LI className='links'
                            onMouseEnter={() => setFocusHome(true)}
                            onMouseLeave={() => setFocusHome(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.08 }}
                            >
                            {focusHome ?
                                <><A href='/'><span> - </span>HOME<span> - </span></A></>
                                : <A href='/'>HOME</A>
                            }
                        </LI>
                        <LI className='links'
                            onMouseEnter={() => setFocusGallery(true)}
                            onMouseLeave={() => setFocusGallery(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.08 }}
                            onClick={() => showMenu ? toggleMenu() : null}
                            >
                            {focusGallery ?
                                <><A href='/gallery'><span> - </span>GALLERY<span> - </span></A></>
                                : <A href='/gallery'>GALLERY</A>
                            }
                        </LI>
                        <LI className='links'
                            onMouseEnter={() => setFocusResidentArtists(true)}
                            onMouseLeave={() => setFocusResidentArtists(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.08 }}
                            onClick={() => showMenu ? toggleMenu() : null}
                            >
                            {focusResidentArtists ?
                                <><A href='/#artistCards'><span> - </span>RESIDENT ARTISTS<span> - </span></A></>
                                : <A href='/#artistCards'>RESIDENT ARTISTS</A>
                            }
                        </LI>
                        <LI className='links'
                            onMouseEnter={() => setFocusMerchandise(true)}
                            onMouseLeave={() => setFocusMerchandise(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.08 }}
                            onClick={() => showMenu ? toggleMenu() : null}
                            >
                            {focusMerchandise ?
                                <><A href='/#merchandisePeek'><span> - </span>MERCHANDISE<span> - </span></A></>
                                : <A href='/#merchandisePeek'>MERCHANDISE</A>
                            }
                        </LI>
                        <LI className='links'
                            onMouseEnter={() => setFocusContactUs(true)}
                            onMouseLeave={() => setFocusContactUs(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.08 }}
                            onClick={() => showMenu ? toggleMenu() : null}
                            >
                            {focusContactUs ?
                                <><A href='/#contactUs'><span> - </span>CONTACT US<span> - </span></A></>
                                : <A href='/#contactUs'>CONTACT US</A>
                            }
                        </LI>
                    </UL>
                </Container>
            : null}
        </>
    )
}





// export default function MenuModal() {
//     return (
//         <nav>

            // {/* <Link className='links' to='/'>
            //     <h1 className='home-button'>HOME</h1>
            // </Link>
            // <Link className='links' to='/gallery'>
            //     <h1 className='gallery-button'>GALLERY</h1>
            // </Link>
            // <Link className='links' to='/'>
            //     <h1 className='resident-artists-button'>RESIDENT ARTISTS</h1>
            // </Link>
            // <Link className='links' to='/'>
            //     <h1 className='merchandise-button'>MERCHANDISE</h1>
            // </Link>
            // <Link className='links' to='/'>
            //     <h1 className='contact-us-button'>CONTACT US</h1>
            // </Link> */}

//             <ul className='menu-links'>
//                 <li className='links'>
//                     <a href='/'>HOME</a>
//                 </li>
//                 <li className='links'>
//                     <a className='' href='/gallery'>GALLERY</a>
//                 </li>
//                 <li className='links'>
//                     <a href='/#artistCards'>RESIDENT ARTISTS</a>
//                 </li>
//                 <li className='links'>
//                     <a href='/#merchandisePeek'>MERCHANDISE</a>
//                 </li>
//                 <li className='links'>
//                     <a href='/#contactUs'>CONTACT US</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }