import Slider from 'react-slick';
import { Rating } from 'react-simple-star-rating';
import './testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testmonials = () => {

  const testimonials = [
    {
      name: 'John Doe',
      image: '/UserImages/user4.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 100
    },
    {
      name: 'Jane Doe',
      image: '/UserImages/user5.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 83
    },
    {
      name: 'John Smith',
      image: '/UserImages/user1.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 77
    },
    {
      name: 'Jane Smith',
      image: '/UserImages/user2.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 70
    }, 
    {
      name: 'John Doe',
      image: '/UserImages/user3.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 75
    },
    {
      name: 'Jane Doe',
      image: '/UserImages/user6.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt', 
      rating: 80
    }, 
    {
      name: 'John Smith',
      image: '/UserImages/user7.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio nec lacinia ultricies, elit purus tincidunt',
      rating: 100
    }, 
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <>
      <div className="testimonials-container">
        <h1>Testimonials</h1>
        <Slider {...settings} className='slider'>
          {
            testimonials.map((testimonial, index) => (
              
              <div className="card" key={index}>
                <div className="image-container">
                  <img src={testimonial.image} alt=""/>
                </div>
                <h4 className="title">{testimonial.name}</h4>
                <p className="feedback">{testimonial.feedback}</p>
                <span>Rating: 
                  <Rating 
                    initialValue={testimonial.rating / 20}
                    readonly={true}
                    size={25}
                    allowFraction={true}
                  />
                </span>
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  )
}

export default Testmonials