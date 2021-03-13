import { useState, useEffect, useRef } from 'react'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function GalleryCarousel() {

    const [ nav1, setNav1 ] = useState(null)
    const [ nav2, setNav2 ] = useState(null)

    const slider1 = useRef(null)
    const slider2 = useRef(null)

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         nav1: null,
    //         nav2: null
    //     };
    // }

    useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    })

    // componentDidMount() {
    //     this.setState({
    //         nav1: this.slider1,
    //         nav2: this.slider2
    //     });
    // }

    return (
        <div>
            <h2>Our Work</h2>
            <h4>First Slider</h4>
            <Slider
                asNavFor={nav2}
                ref={slider1}
                >
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
            </Slider>
            <h4>Second Slider</h4>
            <Slider
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                >
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
            </Slider>
        </div>
        )
}