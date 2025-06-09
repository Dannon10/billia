/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

export default function Download() {
  return (
    <section className='download-section'>
      <div className='download-content'>
        <div className='download-text'>
          <h2>Download Billia <br /> Today</h2>
          <p>
            Fast payments, smart reminders, and secure wallet <br /> tools - all
            inside Billia
          </p>
          <div className='download-btns'>
            <button className='btn-download'>
              <span>
                <Image
                  src='/images/Playstore.png'
                  alt='Google Play Store'
                  width={24}
                  height={24}
                  className='app-icons'
                />
              </span>
              GET IT ON <br />
              Google Play
            </button>
            <button className='btn-download'>
              <span>
                <Image
                  src='/images/apple (2).png'
                  alt='Apple App Store'
                  width={24}
                  height={24}
                  className='app-icons apple'
                />
              </span>
              Download on the <br /> App Store
            </button>
          </div>
        </div>
        <div>
          <Image
            src='/images/image 9.png'
            alt='Billia app preview'
            width={400} 
            height={400}
            className='download-img'
          />
        </div>
      </div>
    </section>
  )
}
