export default function Home() {
    return (
        <>
            <h1>SPECIALTY<br/>AMERICAN TRADITIONAL<br/>TATTOO SHOP</h1>
            <section>
                <h1 id='services'>WHAT WE DO</h1>
                <ul id='servicesList'>
                    <li>
                        <img alt='tattooIcon' id='tattooIcon' className='servicesIcons'/>
                        <h5>Tattoo</h5>
                    </li>
                    <li>
                        <img alt='tattooDesignIcon' id='tattooDesignIcon' className='servicesIcons'/>
                        <h5>Tattoo<br/>Design</h5>
                    </li>
                    <li>
                        <img alt='TattooCoverUpIcon' id='TattooCoverUpIcon' className='servicesIcons'/>
                        <h5>Tattoo<br/>Cover-Up</h5>
                    </li>
                    <li>
                        <img alt='MicroBladingIcon' id='MicroBladingIcon' className='servicesIcons'/>
                        <h5>Micro<br/>Blading</h5>
                    </li>
                </ul>
            </section>
            <section id='galleryPeek'>
                <h1 id='galleryPeekTitle'>OUR WORK</h1>
                <div id='galleryPeekGrid'>
                    <div id='linkToGalleryPage'>
                        <h5 className='visit-our-gallery-button'>VISIT OUR<br/>GALLERY</h5>
                    </div>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                    <img alt='imgName' id='' className=''/>
                </div>
            </section>
            <section id='artistCards'>
                <h1 id='artistCardsTitle'>RESIDENT ARTISTS</h1>
                <ul id='artistCardsList'>
                    <li>
                        <div id='artistCard'>
                            <img alt='imgName' id='artistCardImg' className='artist-card-img'/>
                            <div className='artist-card-info-left'>
                                <h5>ARTIST X</h5>
                                <h6>Artist Specialties List</h6>
                            </div>
                            <div className='artist-card-info-right'>
                                <img alt='consultationIcon' className='artist-card-consultation-icon'/>
                                <h6>Consultation</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section id='merchandisePeek'>
                <h1 id='merchandisePeekTitle'>MERCHANDISE</h1>
                <div id='merchandisePeekGrid'>
                    <div id='linkToMerchandisePage'>
                        <h5 className='visit-our-store-button'>VISIT<br/>OUR<br/>STORE</h5>
                    </div>
                    <img alt='imgName' id='merchandisePeekImg' className='merchandise-peek-img'/>
                </div>
            </section>
            <section id='contactUs'>
                <h1 id='contactUsTitle'>CONTACT US</h1>
                <div id='contactUsSocialMedia'>
                    <h5 className='social-media-title'>Social Media</h5>
                    <div className='social-media-table'>
                        <h5 className='socialMediaName'>facebook</h5>
                        <a className='socialMediaHandle' href='https://www.facebook.com/avtatco/'>@avtatco</a>
                        <h5 className='socialMediaName'>instagram</h5>
                        <a className='socialMediaHandle' href='https://instagram.com/americanvengeance?igshid=1fzfwzmsrqqkm'>@americanvengeance</a>
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
        </>
    )
}