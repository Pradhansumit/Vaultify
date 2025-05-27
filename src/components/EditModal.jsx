function EditModal({ site, username, password }) {
  const handleSubmit = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form action="" className="flex flex-col gap-3">
            <div>
              <label htmlFor="site" className="mr-4">
                Website
              </label>
              <input
                className="input"
                type="text"
                name="site"
                id="site"
                value={`${site}`}
              />
            </div>
            <div>
              <label htmlFor="username" className="mr-4">
                Username
              </label>
              <input
                className="input"
                type="text"
                name="username"
                id="username"
                value={`${username}`}
              />
            </div>
            <div>
              <label htmlFor="username" className="mr-4">
                Password
              </label>
              <input
                className="input"
                type="text"
                name="password"
                id="password"
                value={`${password}`}
              />
            </div>
          </form>
          <button
            className="my-3 btn bg-success text-gray-950"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </dialog>
    </>
  );
}

export default EditModal;
