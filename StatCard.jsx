
function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="card">
      <h2>{icon}</h2>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default StatCard;