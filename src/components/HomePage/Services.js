//  //  //  IMAGES  //  //  //

import iconMicroBlading from '../../images/iconMicroBlading.png'
import iconTattoo from '../../images/iconTattoo.png'
import iconTattooCoverUp from '../../images/iconTattooCoverUp.png'
import iconTattooDesign from '../../images/iconTattooDesign.png'


//  //  //  STYLED-COMPONENTS   //  //  //




//  //  //  FUNCTION    //  //  //

export default function Services() {
    return (
        <section id='services' className='home-page-sections'>
            <h1 id='servicesTitle'>WHAT WE DO</h1>
            <ul id='servicesList'>
                <li>
                    <img src={iconTattoo} alt='tattooIcon' id='tattooIcon' className='servicesIcons'/>
                    <h5>Tattoo</h5>
                </li>
                <li>
                    <img src={iconTattooDesign} alt='tattooDesignIcon' id='tattooDesignIcon' className='servicesIcons'/>
                    <h5>Tattoo<br/>Design</h5>
                </li>
                <li>
                    <img src={iconTattooCoverUp} alt='TattooCoverUpIcon' id='TattooCoverUpIcon' className='servicesIcons'/>
                    <h5>Tattoo<br/>Cover-Up</h5>
                </li>
                <li>
                    <img src={iconMicroBlading} alt='MicroBladingIcon' id='MicroBladingIcon' className='servicesIcons'/>
                    <h5>Micro<br/>Blading</h5>
                </li>
            </ul>
        </section>
    )
}