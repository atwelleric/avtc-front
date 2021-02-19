export default function ArtistCards() {
    return (
        <section id='artistCards' className='home-page-sections'>
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
    )
}