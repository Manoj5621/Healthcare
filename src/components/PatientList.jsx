
const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, image: "Layer 8@2x.png" },
  { name: "Ryan Johnson", gender: "Male", age: 45, image: "Layer 1@2x.png" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, image: "Layer 3@2x.png" },
  { name: "Jessica Taylor", gender: "Female", age: 28, image: "JessicaTaylor.png", active: true },
  { name: "Samantha Johnson", gender: "Female", age: 56, image: "Layer 6@2x.png" },
  { name: "Ashley Martinez", gender: "Female", age: 54, image: "Layer 12@2x.png" },
  { name: "Olivia Brown", gender: "Female", age: 32, image: "Layer 10@2x.png" },
  { name: "Tyler Davis", gender: "Male", age: 19, image: "Layer 9@2x.png" },
  { name: "Kevin Anderson", gender: "Male", age: 30, image: "Layer 4@2x.png" },
  { name: "Dylan Thompson", gender: "Male", age: 36, image: "Layer 7@2x.png" },
  { name: "Nathan Evans", gender: "Male", age: 58, image: "Layer 12@2x.png" },
  { name: "Mike Nolan", gender: "Male", age: 31, image: "pexels-photo-1222271@2x.png" }
];

function PatientList() {
  return (
    <aside className="patients-panel">

      <div className="panel-heading">
        <h2>Patients</h2>
        <img
          src="/assets/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Search"
          width="20"
        />
      </div>

      <div className="patient-list">

        {patients.map((patient) => (
          <div
            className={`patient-item ${patient.active ? "active" : ""}`}
            key={patient.name}
          >

            <div className="patient-info">

              <div className="patient-avatar">
                <img
                  src={`/assets/images/${patient.image}`}
                  alt={patient.name}
                />
              </div>

              <div>
                <h4>{patient.name}</h4>
                <p>{patient.gender}, {patient.age}</p>
              </div>

            </div>

            <span className="more-options">...</span>

          </div>
        ))}

      </div>

    </aside>
  );
}

export default PatientList;
