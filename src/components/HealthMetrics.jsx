
function HealthMetrics() {
  return (
    <section className="health-metrics">

      <div className="metric-card respiratory">
        <h3>Respiratory Rate</h3>
        <h2>-- bpm</h2>
        <p>Normal</p>
      </div>

      <div className="metric-card temperature">
        <h3>Temperature</h3>
        <h2>-- °F</h2>
        <p>Normal</p>
      </div>

      <div className="metric-card heart-rate">
        <h3>Heart Rate</h3>
        <h2>-- bpm</h2>
        <p>--</p>
      </div>

    </section>
  );
}

export default HealthMetrics;
