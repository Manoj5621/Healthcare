
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src="/assets/icons/TestLogo.svg" alt="Tech.Care" />
      </div>

      
      <nav className="nav-links">
        <a href="#">
          <img
            src="/assets/icons/home_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <span>Overview</span>
        </a>

        <a href="#" className="active">
          <img
            src="/assets/icons/group_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <span>Patients</span>
        </a>

        <a href="#">
          <img
            src="/assets/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <span>Schedule</span>
        </a>

        <a href="#">
          <img
            src="/assets/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <span>Message</span>
        </a>

        <a href="#">
          <img
            src="/assets/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
          />
          <span>Transactions</span>
        </a>
      </nav>

    
      <div className="doctor-profile">
        <img
          src="/assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="Dr. Jose Simmons"
        />

        <div className="doctor-details">
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>

        <div className="doctor-actions">
          <img
            src="/assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Settings"
          />

          <img
            src="/assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
            alt="More options"
          />
        </div>
      </div>

    </header>
  );
}

export default Navbar;
