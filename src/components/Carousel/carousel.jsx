// import React from 'react'
import './carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    const slides = [
        {
            id: 1,
            title: 'Build Your Dream PC',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img1.jpg'
        },
        {
            id: 2,
            title: 'Aesthetic Customization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img2.jpg'
        },
        {
            id: 3,
            title: 'Accessories and Peripherals',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img3.jpg'
        },
        {
            id: 4,
            title: 'Performance Optimization',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img4.jpg'
        },
        {
            id: 5,
            title: 'Testing and Quality Assurance',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img5.jpg'
        },
        {
            id: 6,
            title: 'Warranty and Maintenance',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptates dolorem similique cum, beatae error dignissimos numquam vero sapiente ab dolorum vel quidem autem consequatur natus vitae quod modi reprehenderit tempore quis. Natus?',
            image: '/CarouselIcons/img6.jpg'
        }
    ]
    return (
        <>
            <div className="slider-container">
                <h1>Services</h1>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div className='content-container' key={slide.id}>
                            <div className="content">
                                <img src={slide.image} alt="" width={400} height={390}/>
                                <div className="main-content">
                                    <img src={slide.image} className='bg-img' alt=""/>
                                    <div className="text-content">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Carousel