import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <button className="donor-btn">Register for Donor</button>
        
        <div className="hero-text">
          <h1>SAVE LIVES TODAY</h1>

          <div className="highlight-box">
            <h3>One Donor can save 8 Lives</h3>
          </div>
           <p id="gift">Give the gift of life. Become an organ donor!</p>

          <p>
            Total Donor Count: <span className="count">1250</span>
          </p>
        </div>
        
      </section>

      <section className="donation">
        <h2>ORGAN AND TISSUE DONATION</h2>
        <p>
          Organ donation is a process to implant of an organ from a living being
          or a cadaver to another living being to replace the lost function of
          one’s organs.
        </p>

        <div className="donation-flex">
          <div className="donation-card">
            <img src="./src/assets/images/heartpng.png" alt="Organ Donation" />
            <h2>WHAT IS ORGAN AND TISSUE DONATION?</h2>
            <p>
              Organ donation means that a person during his life time pledges
              that after his/her death, organs from his/her body can…
            </p>
          </div>

          <div className="donation-card">
            <img src="./src/assets/images/bodytras.svg" alt="Transplantation" />
            <h2>WHAT IS TRANSPLANTATION?</h2>
            <p>
              Transplantation of human cells, tissues or organs saves many lives
              and restores essential functions where no alternatives…
            </p>
          </div>

          <div className="donation-card">
            <img src="./src/assets/images/people.svg" alt="Who can donate" />
            <h2>WHO CAN DONATE?</h2>
            <p>
              Any person not less than 18 years of age, who voluntarily
              authorizes the removal of any of his organ and/or tissue…
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
