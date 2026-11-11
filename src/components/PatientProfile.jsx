
function PatientProfile() {
  return (
    <section className="patient-profile">

      <div className="profile-image">
        <img
          src="/assets/images/JessicaTaylor.png"
          alt="Jessica Taylor"
        />
      </div>

      <h2>Jessica Taylor</h2>

      <div className="profile-details">

        <div className="profile-detail">
          <h4>Date Of Birth</h4>
          <p>--</p>
        </div>

        <div className="profile-detail">
          <h4>Gender</h4>
          <p>--</p>
        </div>

        <div className="profile-detail">
          <h4>Contact Info.</h4>
          <p>--</p>
        </div>

        <div className="profile-detail">
          <h4>Emergency Contacts</h4>
          <p>--</p>
        </div>

        <div className="profile-detail">
          <h4>Insurance Provider</h4>
          <p>--</p>
        </div>

      </div>

      <button className="profile-button">
        Show All Information
      </button>

    </section>
  );
}

export default PatientProfile;
