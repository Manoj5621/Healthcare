
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src="/assets/icons/TestLogo.svg" alt="Tech.Care" />
      </div>

      <nav className="nav-links">
        <a href="#">Overview</a>
        <a href="#" className="active">Patients</a>
        <a href="#">Schedule</a>
        <a href="#">Message</a>
        <a href="#">Transactions</a>
      </nav>

      <div className="doctor-profile">
        <img
          src="/assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="Dr. Jose Simmons"
        />

        <div>
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>
      </div>

    </header>
  );
}

export default Navbar;
