import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaRegClipboard } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import EditModal from "./EditModal";

const VaultifyPasswordItem = ({ item, onDelete, onUpdate }) => {
  const [isShow, setIsShow] = useState(false);
  const [clipboardToast, setClipboardToast] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleReveal = () => {
    setIsShow(!isShow);
  };

  const handleClipboard = () => {
    navigator.clipboard.writeText(item.password);
    setClipboardToast(true);
  };

  const handleEdit = () => {
    setIsEditOpen(true);
  };

  useEffect(() => {
    if (clipboardToast === true) {
      const timer = setTimeout(() => {
        setClipboardToast(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [clipboardToast]);

  return (
    <>
      {/* toast area */}
      {clipboardToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success text-white font-semibold">
            <span>Copied to clipboard.</span>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <EditModal
          site={item.app}
          id={item.id}
          username={item.username}
          password={item.password}
          onClose={() => setIsEditOpen(false)}
          onUpdate={onUpdate}
        />
      )}

      {/* Card section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 bg-white dark:bg-zinc-800 rounded-md shadow-sm relative">
        <div className="md:col-span-1">
          <span className="font-semibold md:hidden">App: </span>
          {item.app}
        </div>

        <div className="md:col-span-1">
          <span className="font-semibold md:hidden">Username: </span>
          {item.username}
        </div>

        <div className="md:col-span-1">
          <span className="font-semibold md:hidden">Password: </span>
          <span className="items-center" id="password_field_value">
            {isShow ? `${item.password}` : "********"}
          </span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden gap-3 md:flex md:justify-end">
          <button title="Reveal" onClick={handleReveal}>
            {isShow ? (
              <FaRegEye color="white" />
            ) : (
              <FaRegEyeSlash color="white" />
            )}
          </button>
          <button title="Copy" onClick={handleClipboard}>
            <FaRegClipboard color="white" />
          </button>
          <button title="Edit" onClick={handleEdit}>
            <BsPencil color="white" />
          </button>
          <button title="Delete" onClick={() => onDelete(item.id)}>
            <FaTrash color="white" />
          </button>
        </div>

        {/* Mobile 3-dot menu */}
        <div className="md:hidden">
          <button
            className="absolute top-2 right-3  text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            title="Actions"
          >
            ⋮
          </button>

          {menuOpen && (
            <div className="absolute top-5 right-0 mt-2 bg-zinc-800 text-white rounded shadow-lg/30 p-2 z-50 space-y-2">
              <button
                className="flex items-center gap-2"
                onClick={handleReveal}
              >
                {isShow ? <FaRegEye /> : <FaRegEyeSlash />} Reveal
              </button>
              <button
                className="flex items-center gap-2"
                onClick={handleClipboard}
              >
                <FaRegClipboard /> Copy
              </button>
              <button className="flex items-center gap-2" onClick={handleEdit}>
                <BsPencil /> Edit
              </button>
              <button
                className="flex items-center gap-2"
                onClick={() => onDelete(item.id)}
              >
                <FaTrash /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VaultifyPasswordItem;
