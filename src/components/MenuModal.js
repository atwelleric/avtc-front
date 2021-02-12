import styled from 'styled-components'


//  //  //  STYLED-COMPONENTS   //  //  //

const Container = styled.div`
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

const UL = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    list-style: none;
    padding: 0;
    text-align: center;
`

const LI = styled.ul`
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
	color: inherit;
	text-decoration: none;
    /* margin: 0 auto; */
`

const A = styled.a`
	color: inherit;
	text-decoration: none;
`


//  //  //  COMPONENT   //  //  //

export default function MenuModal({ showMenu, setShowMenu }) {
    return (
        <>
            {showMenu ? 
                <Container>
                    <UL className='menu-links'>
                        <LI className='links'>
                            <A href='/'>HOME</A>
                        </LI>
                        <LI className='links'>
                            <A className='' href='/gallery'>GALLERY</A>
                        </LI>
                        <LI className='links'>
                            <A href='/#artistCards'>RESIDENT ARTISTS</A>
                        </LI>
                        <LI className='links'>
                            <A href='/#merchandisePeek'>MERCHANDISE</A>
                        </LI>
                        <LI className='links'>
                            <A href='/#contactUs'>CONTACT US</A>
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