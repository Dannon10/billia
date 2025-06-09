/* eslint-disable react/no-unescaped-entities */
export default function AboutValues() {
    return (
        <section className='about-values-section'>
            <h3>Our Core Values</h3>
            <div className='value-cards'>

                <div className='value-card light-yellow'>
                    <h5>Simplicity</h5>
                    <p>Payments should be fast, clear, and easy —
                        {/* <br/> */}
                        no stress.</p>
                    <div className="value-image">
                        <Iimg src='/images/compass.png' className="about-value-img" />
                    </div>
                </div>

                <div className='value-card light-green'>
                    <h5>Trust</h5>
                    <p>Your data and money are protected by real-
                        {/* <br/> */}
                        time security
                        and compliance.</p>
                    <div className="value-image">
                        <Iimg src='/images/lock.png' className="about-value-img" />
                    </div>
                </div>

                <div className='value-card light-pink'>
                    <h5>Innovation</h5>
                    <p>We use smart tools like Billia AI to make bill
                        {/* <br/>  */}
                        payments smarter every day.</p>
                    <div className="value-image">
                        <Iimg src='/images/brain.png' className="about-value-img" />
                    </div>
                </div>


                <div className='value-card light-blue'>
                    <h5>People First</h5>
                    <p>Everything we build starts with our users’
                        {/* <br/>  */}
                        needs and experience in mind.</p>
                    <div className="value-image">
                        <img src='/images/shake.png' className="about-value-img" />
                    </div>
                </div>

            </div>
            <div className="ready">
                <h2>Ready to simplify your bills? <br /> Download Billia and experience the smarter way to pay.</h2>
                <div className="download-btns about-download">
                    <button className="btn-download"><span><img src="/images/playstore.png" className="app-icons" /></span>GET IT ON <br />Google Play</button>
                    <button className="btn-download"><span><img src="/images/apple (2).png" className="app-icons apple" /></span> Download on the <br /> App Store</button>
                </div>
            </div>
        </section>
    )
}
