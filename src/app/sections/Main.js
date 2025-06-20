import Image from 'next/image';

export default function Main() {
  return (
    <section className="main-container">
      <div className="main-content">
        <h3>Everything You Need to Pay Smarter</h3>
        <div className="main-details">
          <div className="blue-green">
            <div className="main-card blue">
              <h4>All-in-one Bill Payments</h4>
              <p>
                Pay for Electricity, TV, internet, education, and <br /> betting
                - all in seconds.
              </p>
              <Image
                src="/images/Group 140.png"
                alt="Bill Payments Icon"
                width={100}
                height={100}
                className="main-img-blue"
              />
            </div>
            <div className="main-card green">
              <h4>Airtime & Data Top-Up</h4>
              <p>
                Buy airtime and mobile data for yourself or others <br /> -
                instantly and globally.
              </p>
              <Image
                src="/images/Group 138.png"
                alt="Airtime and Data Icon"
                width={100}
                height={100}
                className="main-img-green"
              />
            </div>
          </div>
          <div className="virtual-card">
            <div className="virtual-card-text">
              <h4>Virtual Dollar Card</h4>
              <p>
                Shop globally with your own secure virtual dollar <br /> card
                - perfect for subscriptions and online <br /> payments.
              </p>
            </div>
            <div className="virtual-card-img">
              <Image
                src="/images/atm-card.png"
                alt="Virtual Dollar Card"
                width={200}
                height={120}
                className="virtual-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
