import { useState } from "react";
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
  const [data, setData] = useState(sampleData);

  const handleDelete = (id) => {
    console.log(id);
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-3">
      {data.map((item) => (
        <VaultifyPasswordItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Dashboard;
