import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Review() {
  return (
    <section className='review-section'>
      <p className='testimonial'>Testimonials</p>
      <h4>What Our Customers Say</h4>
      <div className='review-cards'>
        <button className="circle" aria-label="Previous testimonial">
          <FaArrowLeft className='arrow-icons' />
        </button>

        <div className='review-card'>
          <div className='review-head'>
            <div className='review-user-info'>
              <Image 
                src='/images/Ellipse 29.png' 
                alt="Arlene McCoy" 
                width={50} 
                height={50} 
                className='ellipse-img' 
              />
              <div className='user-name'>
                <h5>Arlene McCoy</h5>
                <p>One year of using Billia</p>
              </div>
            </div>
            <span className='quote'>
              <Image 
                src='/images/quote.png' 
                alt="Quote icon" 
                width={24} 
                height={24} 
                className='quote' 
              />
            </span>
          </div>
          <p className='review-text'>
            Before Billia, I always missed my PHCN payment dates. Now I get reminders, and I can repeat past payments without filling forms. It's efficient, secure, and perfect for people like me who forget easily.
          </p>
          <div className='review'>
            <p>4 June 2025</p>
            <span className='review-rating'>
              <Image 
                src='/images/star-icon.png' 
                alt="Star rating" 
                width={16} 
                height={16} 
              /> 4.7/5.0
            </span>
          </div>
        </div>

        <div className='review-card'>
          <div className='review-head'>
            <div className='review-user-info'>
              <Image 
                src='/images/Ellipse 29 (1).png' 
                alt="Savannah Nguyen" 
                width={50} 
                height={50} 
                className='ellipse-img' 
              />
              <div className='user-name'>
                <h5>Savannah Nguyen</h5>
                <p>Six Months of using Billia</p>
              </div>
            </div>
            <span className='quote'>
              <Image 
                src='/images/quote.png' 
                alt="Quote icon" 
                width={24} 
                height={24} 
                className='quote' 
              />
            </span>
          </div>
          <p className='review-text'>
            I was surprised how fast wallet funding worked. I transferred from bank to the Billia virtual account, and the money reflected instantly. I've used it to pay my cable and internet bills ever since.
          </p>
          <div className='review'>
            <p>24 April 2025</p>
            <span className='review-rating'>
              <Image 
                src='/images/star-icon.png' 
                alt="Star rating" 
                width={16} 
                height={16} 
              /> 4.5/5.0
            </span>
          </div>
        </div>

        <button className="circle" aria-label="Next testimonial">
          <FaArrowRight className='arrow-icons' />
        </button>
      </div>
    </section>
  );
}
