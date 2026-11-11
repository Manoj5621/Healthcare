
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function DiagnosisHistory({ patient }) {
  if (!patient || !patient.diagnosis_history) return null;

  const history = [...patient.diagnosis_history].sort(
    (a, b) =>
      new Date(a.year, new Date(`${a.month} 1`).getMonth()) -
      new Date(b.year, new Date(`${b.month} 1`).getMonth())
  );

  const lastSixMonths = history.slice(-6);
  const latest = lastSixMonths[lastSixMonths.length - 1];

  const chartData = {
    labels: lastSixMonths.map(
      (item) => `${item.month.slice(0, 3)}, ${item.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: lastSixMonths.map(
          (item) => item.blood_pressure.systolic.value
        ),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Diastolic",
        data: lastSixMonths.map(
          (item) => item.blood_pressure.diastolic.value
        ),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: "#DCDCDC",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="diagnosis-history">
      <h2>Diagnosis History</h2>

      <div className="blood-pressure-section">
        <div className="chart-heading">
          <h3>Blood Pressure</h3>
          <span>Last 6 months</span>
        </div>

        <div className="blood-pressure-chart">
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="blood-pressure-values">
            <div>
              <h4>Systolic</h4>
              <p>{latest.blood_pressure.systolic.value}</p>
              <span>
                {latest.blood_pressure.systolic.levels}
              </span>
            </div>

            <div>
              <h4>Diastolic</h4>
              <p>{latest.blood_pressure.diastolic.value}</p>
              <span>
                {latest.blood_pressure.diastolic.levels}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosisHistory;
