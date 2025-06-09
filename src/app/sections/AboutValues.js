/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function AboutValues() {
  return (
    <section className="about-values-section">
      <h3>Our Core Values</h3>
      <div className="value-cards">
        <div className="value-card light-yellow">
          <h5>Simplicity</h5>
          <p>
            Payments should be fast, clear, and easy —
            {/* <br/> */}
            no stress.
          </p>
          <div className="value-image">
            <Image
              src="/images/compass.png"
              alt="Compass icon for simplicity"
              width={80}  // adjust size as needed
              height={80}
              className="about-value-img"
            />
          </div>
        </div>

        <div className="value-card light-green">
          <h5>Trust</h5>
          <p>
            Your data and money are protected by real-
            {/* <br/> */}
            time security and compliance.
          </p>
          <div className="value-image">
            <Image
              src="/images/lock.png"
              alt="Lock icon for trust"
              width={80}
              height={80}
              className="about-value-img"
            />
          </div>
        </div>

        <div className="value-card light-pink">
          <h5>Innovation</h5>
          <p>
            We use smart tools like Billia AI to make bill
            {/* <br/>  */}
            payments smarter every day.
          </p>
          <div className="value-image">
            <Image
              src="/images/brain.png"
              alt="Brain icon for innovation"
              width={80}
              height={80}
              className="about-value-img"
            />
          </div>
        </div>

        <div className="value-card light-blue">
          <h5>People First</h5>
          <p>
            Everything we build starts with our users’
            {/* <br/>  */}
            needs and experience in mind.
          </p>
          <div className="value-image">
            <Image
              src="/images/shake.png"
              alt="Handshake icon for people first"
              width={80}
              height={80}
              className="about-value-img"
            />
          </div>
        </div>
      </div>

      <div className="ready">
        <h2>
          Ready to simplify your bills? <br /> Download Billia and experience the smarter way to pay.
        </h2>
        <div className="download-btns about-download">
          <button className="btn-download">
            <span>
              <Image
                src="/images/Playstore.png"
                alt="Google Play store icon"
                width={40}
                height={40}
                className="app-icons"
              />
            </span>
            GET IT ON <br />Google Play
          </button>
          <button className="btn-download">
            <span>
              <Image
                src="/images/apple (2).png"
                alt="Apple App Store icon"
                width={40}
                height={40}
                className="app-icons apple"
              />
            </span>
            Download on the <br /> App Store
          </button>
        </div>
      </div>
    </section>
  );
}
