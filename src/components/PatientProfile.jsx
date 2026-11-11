
function formatDate(dateString) {
  if (!dateString) return "--";

  const value = String(dateString).trim();
  if (!value) return "--";

  const isoMatch = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  const slashMatch = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const [, month, day, year] = slashMatch;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function PatientProfile({ patient }) {
  if (!patient) return null;

  const dateOfBirth = patient.date_of_birth ?? patient.dob ?? patient.dateOfBirth ?? patient.birth_date;

  const profileDetails = [
    {
      label: "Date Of Birth",
      value: formatDate(dateOfBirth),
      icon: "/assets/icons/BirthIcon.svg",
    },
    {
      label: "Gender",
      value: patient.gender,
      icon: patient.gender === "Female"
        ? "/assets/icons/FemaleIcon.svg"
        : "/assets/icons/MaleIcon.svg",
    },
    {
      label: "Contact Info.",
      value: patient.phone_number,
      icon: "/assets/icons/PhoneIcon.svg",
    },
    {
      label: "Emergency Contacts",
      value: patient.emergency_contact,
      icon: "/assets/icons/PhoneIcon.svg",
    },
    {
      label: "Insurance Provider",
      value: patient.insurance_type,
      icon: "/assets/icons/InsuranceIcon.svg",
    },
  ];

  return (
    <section className="patient-profile">

      <div className="profile-image">
        <img
          src={patient.profile_picture}
          alt={patient.name}
        />
      </div>

      <h2>{patient.name}</h2>

      <div className="profile-details">

        {profileDetails.map((detail) => (
          <div className="profile-detail" key={detail.label}>

            <div className="profile-icon">
              <img src={detail.icon} alt="" />
            </div>

            <div className="profile-text">
              <h4>{detail.label}</h4>
              <p>{detail.value || "--"}</p>
            </div>

          </div>
        ))}

      </div>

      <button className="profile-button">
        Show All Information
      </button>

    </section>
  );
}

export default PatientProfile;
