/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="hero-container about-hero">
      <div className="about-hero-img">
        <Image
          src="/images/about-hero.png"
          alt="About Hero"
          width={600}   
          height={400}   
          className="about-hero-img"
        />
      </div>
      <div className="about-hero-text">
        <h2>Remagining How Nigerians Pay, One Bill at a Time</h2>
        <p>
          At Billia, we're building more than just a payment app - we're 
          {/* <br/> */}
          creating a smarter, simpler way for everyday Nigerians to stay 
          {/* <br/> */}
          connected, pay their bills, and take control of their financial lives.
        </p>
      </div>
    </div>
  )
}
