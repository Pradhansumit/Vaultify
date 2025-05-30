import { useState } from "react";

function AddModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    app: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      ...form,
    };
    onAdd(newItem);
    onClose();
  };

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Edit form */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="site" className="mr-4">
              Website
            </label>
            <input
              id="site"
              name="app"
              className="input"
              type="text"
              defaultValue={form.app}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="username" className="mr-4">
              Username
            </label>
            <input
              id="username"
              name="username"
              className="input"
              type="text"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="mr-4">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="input"
              type="text"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="my-3 btn bg-success text-gray-950">
            Save
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default AddModal;
