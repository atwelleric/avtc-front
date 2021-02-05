import { Link } from 'react-router-dom'

import '../comp-css/nav.css'

export default function Nav() {
    return (
        <header>
            <h1 className='menu-button' onTap={null}>+</h1>
            <Link className='links' to='/'>
                <h1 className='avtc-button'>AVTC</h1>
            </Link>
        </header>
    )
}