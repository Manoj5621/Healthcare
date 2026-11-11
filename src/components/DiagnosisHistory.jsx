
function DiagnosisHistory() {
  return (
    <section className="diagnosis-history">
      <h2>Diagnosis History</h2>

      <div className="blood-pressure-section">
        <div className="chart-heading">
          <h3>Blood Pressure</h3>
          <span>Last 6 months</span>
        </div>

        <div className="blood-pressure-chart">
          <div id="blood-pressure-chart">
            Chart will be added in Step 7
          </div>

          <div className="blood-pressure-values">
            <div>
              <h4>Systolic</h4>
              <p>--</p>
            </div>

            <div>
              <h4>Diastolic</h4>
              <p>--</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosisHistory;
