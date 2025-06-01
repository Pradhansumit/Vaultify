import { useState } from "react";
import VaultifyPasswordItem from "../components/VaultifyPasswordItem";
import Header from "../components/Header";
import AddModal from "../components/AddModal";
import Sidebar from "../components/Sidebar";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleUpdate = (updatedItem) => {
    const newData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );
    setData(newData);
  };

  const handleDelete = (id) => {
    console.log(id);
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
  };

  const handleAdd = (newItem) => {
    setData([...data, newItem]);
  };

  const filteredData = data.filter(
    (item) =>
      item.app.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header setSearchQuery={setSearchQuery} />
        <div className="max-w-4xl mx-auto p-4 space-y-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <VaultifyPasswordItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))
          ) : (
            <p className="text-white text-center">No results found.</p>
          )}
        </div>
        <div className="absolute right-10 bottom-10">
          <button
            className="btn bg-slate-800 text-2xl"
            onClick={() => {
              setIsAddOpen(!isAddOpen);
            }}
          >
            +
          </button>
        </div>
        {isAddOpen && (
          <AddModal onClose={() => setIsAddOpen(false)} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
