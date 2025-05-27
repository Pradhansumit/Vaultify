import VaultifyPasswordItem from "../components/VaultifyPasswordItem";

const sampleData = [
  {
    id: 1,
    app: "Facebook",
    username: "john@fb.com",
    password: "facebook@pass",
  },
  { id: 2, app: "Gmail", username: "jane@gmail.com", password: "gmail@pass" },
  { id: 3, app: "GitHub", username: "pradhansumit", password: "github@pass" },
];

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-3">
      {sampleData.map((item) => (
        <VaultifyPasswordItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
