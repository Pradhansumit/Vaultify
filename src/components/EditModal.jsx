import { useState } from "react";

function EditModal({ id, site, username, password, onClose, onUpdate }) {
  const [form, setForm] = useState({ id, app: site, username, password });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
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
            <label htmlFor={`site-${id}`} className="mr-4">
              Website
            </label>
            <input
              id={`site-${id}`}
              name="app"
              className="input"
              type="text"
              defaultValue={form.app}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor={`username-${id}`} className="mr-4">
              Username
            </label>
            <input
              id={`username-${id}`}
              name="username"
              className="input"
              type="text"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor={`password-${id}`} className="mr-4">
              Password
            </label>
            <input
              id={`password-${id}`}
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

export default EditModal;
