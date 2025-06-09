/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <div className="hero-description">
                    <p className="orange-text">One App. Every payment. Zero Stress</p>
                    <h1 className="hero-primary-text">Simplify Every Payment <br /> with One Powerful App</h1>
                    <p className="hero-sec-text">Billia lets you pay bills, top up airtime, buy data, and manage <br/> your wallet &ndash; all in one place. Fast. Secure. Reliable</p>
                    <div className="download-btns">
                    <button className="btn-download"><span><img src="/images/playstore.png" className="app-icons"/></span>GET IT ON <br/>Google Play</button>
                    <button className="btn-download"><span><img  src="/images/apple (2).png" className="app-icons apple"/></span> Download on the <br/> App Store</button>
                    </div>
                    <div className="community">
                        <Image src="/images/hero-users.png" className="hero-users"/>
                        <p>Join 20,000+ Nigerians making payments smarter every day.</p>
                    </div>
                </div>
                <div className="hero-image">
                    <Image src="/images/hero-image.png" className="hero-img" />
                </div>
            </div>
        </div>
    )
}
