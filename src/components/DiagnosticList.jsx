
function DiagnosticList({ patient }) {
  if (!patient) return null;

  return (
    <section className="diagnostic-list">
      <h2>Diagnostic List</h2>

      <div className="diagnostic-table-container">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {patient.diagnostic_list?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DiagnosticList;
