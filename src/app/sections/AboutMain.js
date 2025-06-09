import React from 'react'

export default function AboutMain() {
  return (
    <section className='about-main-section'>
        <div className='about-main-details'>
            <div className='about-main-1'>
                <div className='about-main-text'>
                <h3>Why we Started </h3>
                <p>We created Billia because we saw a real problem: people 
                    {/* <br/>  */}
                    struggling with too many apps, missed due dates, and unreliable 
                    {/* <br/> */}
                     payment platforms. </p>
                <p>So we built one app that brings it all together — electricity, internet, 
                    {/* <br/> */}
                     school fees, airtime, and even a virtual dollar card. Add Billia AI, 
                     {/* <br/> */}
                      and you’ve got the smartest payment experience available today.</p>
                </div>

            <div>
                <img src='/images/image 10.png' className='about-main-img'/>
            </div>

            </div>

            <div className='about-main-2'>
            <div>
                <img src='/images/image 11.png' className='about-main-img'/>
            </div>
                <div className='about-main-text'>
                <h3>Our Mission & Vision</h3>
                <p><span className='miss'>Mission:</span> To make bill payments effortless, intelligent, and 
                {/* <br/>  */}
                accessible for everyone across Nigeria — no matter their 
                {/* <br/> */}
                 background or tech level. </p>
                <p><span className='miss'>Vision: </span>A future where anyone can manage their financial life from 
                {/* <br/> */}
                 one simple, secure platform — powered by smart automation and 
                 {/* <br/> */}
                  trust.</p>
                </div>
            </div>
        </div>
    </section>
  )
} 
