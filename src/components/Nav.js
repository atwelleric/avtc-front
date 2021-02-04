import { Link } from 'react'

import '../comp-css/nav.css'

export default function Nav() {
    return (
        <header>
            <h1 className='+' onClick={}>+</h1>
            <Link className='links' to='/'>
                <h1 className='AVTC-home-link'>AVTC</h1>
            </Link>
        </header>
    )
}