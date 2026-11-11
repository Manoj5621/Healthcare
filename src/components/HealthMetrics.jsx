
function HealthMetrics({ patient }) {
  if (!patient || !patient.diagnosis_history?.length) return null;

  const latest = patient.diagnosis_history[0];

  const metrics = [
    {
      title: "Respiratory Rate",
      value: latest.respiratory_rate.value,
      unit: "bpm",
      status: latest.respiratory_rate.levels,
      icon: "/assets/icons/respiratory%20rate.svg",
      className: "respiratory",
    },
    {
      title: "Temperature",
      value: latest.temperature.value,
      unit: "°F",
      status: latest.temperature.levels,
      icon: "/assets/icons/temperature.svg",
      className: "temperature",
    },
    {
      title: "Heart Rate",
      value: latest.heart_rate.value,
      unit: "bpm",
      status: latest.heart_rate.levels,
      icon: "/assets/icons/HeartBPM.svg",
      className: "heart",
    },
  ];

  return (
    <div className="health-metrics">
      {metrics.map((metric) => (
        <div
          className={`metric-card ${metric.className}`}
          key={metric.title}
        >
          <div className="metric-icon">
            <img src={metric.icon} alt={metric.title} />
          </div>

          <p>{metric.title}</p>

          <h2>
            {metric.value} {metric.unit}
          </h2>

          <span>{metric.status}</span>
        </div>
      ))}
    </div>
  );
}

export default HealthMetrics;
