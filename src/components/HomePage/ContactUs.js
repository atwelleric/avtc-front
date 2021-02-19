//  //  //  FUNCTIONALITY   //  //  //

import styled from 'styled-components'
import { motion } from 'framer-motion'


//  //  //   STYLED-COMPONENTS  //  //  //

const A = styled.a`
color: inherit;
text-decoration: none;
`


//  //  //  FUNCTION    //  //  //

export default function ContactUs() {
    return (
        <section id='contactUs' className='home-page-sections'>
                <h1 id='contactUsTitle'>CONTACT US</h1>
                <div id='contactUsSocialMedia'>
                    <h5 className='social-media-title'>Social Media</h5>
                    <div className='social-media-table'>
                        <h5 className='socialMediaName'>facebook</h5>
                        <A className='socialMediaHandle' href='https://www.facebook.com/avtatco/'>@avtatco</A>
                        <h5 className='socialMediaName'>instagram</h5>
                        <A className='socialMediaHandle' href='https://instagram.com/americanvengeance?igshid=1fzfwzmsrqqkm'>@americanvengeance</A>
                    </div>
                </div>
                <div id='contactUsShopHours'>
                    <h5 className='shop-hours-title'>Shop Hours</h5>
                    <h5 className='shop-hours-info'>12:00pm - 7:00pm</h5>
                </div>
                <div id='contactUsMainLine'>
                    <h5 className='main-line-title'>Main Line</h5>
                    <h5 className='main-line-info'>(262) 619-9520</h5>
                </div>
                <div id='contactUsLocation'>
                    <h5 className='location-title'>Location</h5>
                    <h5 className='location-info'>
                        American Vengeance Tattoo Co.<br/>
                        4615 7th Ave.<br/>
                        Kenosha, WI<br/>
                        53140
                    </h5>
                </div>
            </section>
    )
}