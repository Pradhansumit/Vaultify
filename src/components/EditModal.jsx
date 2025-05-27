function EditModal({ id, site, username, password, onClose }) {
  const handleSubmit = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      {console.log(id, site, username, password)}
      <dialog id="my_modal_3" className="modal" open>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <form action="" className="flex flex-col gap-3">
            <div>
              <label htmlFor={`siteField-${id}`} className="mr-4">
                Website
              </label>
              <input
                className="input"
                type="text"
                name="siteField"
                id={`siteField-${id}`}
                defaultValue={`${site}`}
              />
            </div>
            <div>
              <label htmlFor={`usernameField-${id}`} className="mr-4">
                Username
              </label>
              <input
                className="input"
                type="text"
                name="usernameField"
                id={`usernameField-${id}`}
                defaultValue={`${username}`}
              />
            </div>
            <div>
              <label htmlFor={`password-${id}`} className="mr-4">
                Password
              </label>
              <input
                className="input"
                type="text"
                name="passwordField"
                id={`password-${id}`}
                defaultValue={`${password}`}
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
