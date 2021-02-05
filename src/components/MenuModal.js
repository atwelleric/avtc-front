// import { Link } from 'react-router-dom'

export default function MenuModal() {
    return (
        <nav>
            {/* <Link className='links' to='/'>
                <h1 className='home-button'>HOME</h1>
            </Link>
            <Link className='links' to='/gallery'>
                <h1 className='gallery-button'>GALLERY</h1>
            </Link>
            <Link className='links' to='/'>
                <h1 className='resident-artists-button'>RESIDENT ARTISTS</h1>
            </Link>
            <Link className='links' to='/'>
                <h1 className='merchandise-button'>MERCHANDISE</h1>
            </Link>
            <Link className='links' to='/'>
                <h1 className='contact-us-button'>CONTACT US</h1>
            </Link> */}
            <ul className='menu-links'>
                <li className='links'>
                    <a href='/'>HOME</a>
                </li>
                <li className='links'>
                    <a className='' href='/gallery'>GALLERY</a>
                </li>
                <li className='links'>
                    <a href='/#artistCards'>RESIDENT ARTISTS</a>
                </li>
                <li className='links'>
                    <a href='/#merchandisePeek'>MERCHANDISE</a>
                </li>
                <li className='links'>
                    <a href='/#contactUs'>CONTACT US</a>
                </li>
            </ul>
        </nav>
    )
}