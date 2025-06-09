import React from 'react'

export default function Download() {
  return (
    <section className='download-section'>
      <div className='download-content'>
        <div className='download-text'>
            <h2>Download Billia <br/> Today</h2>
            <p>Fast payments, smart reminders, and secure wallet <br /> tools - all inside Billia</p>
        <div className="download-btns">
            <button className="btn-download"><span><img src="/images/playstore.png" className="app-icons"/></span>GET IT ON <br/>Google Play</button>
            <button className="btn-download"><span><img  src="/images/apple (2).png" className="app-icons apple"/></span> Download on the <br/> App Store</button>
        </div>
        </div>
        <div>
            <img src='/images/image 9.png'  className='download-img'/>
        </div>
      </div>
    </section>
  )
}
