
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import HealthMetrics from "./components/HealthMetrics";
import PatientProfile from "./components/PatientProfile";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

import { fetchJessicaData } from "./services/patientApi";
import "./App.css";


function App() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPatient = async () => {
      try {
        const data = await fetchJessicaData();
        setPatient(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPatient();
  }, []);

  if (loading) return <h2>Loading dashboard...</h2>;

  if (error) return <h2>API Error: {error}</h2>;

  return (
    <div className="app-container">

      <Navbar />

      <main className="dashboard-layout">

        <PatientList />

        <div className="dashboard-center">

          <div className="history-panel">
            <DiagnosisHistory patient={patient}/>
            <HealthMetrics patient={patient} />
          </div>

          <DiagnosticList patient={patient}/>

        </div>

        <div className="dashboard-right">
          <PatientProfile patient={patient} />
          <LabResults patient={patient} />
        </div>

      </main>

    </div>
  );
}

export default App;
