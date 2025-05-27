import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaRegClipboard } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";

const VaultifyPasswordItem = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const [clipboardToast, setClipboardToast] = useState(false);
  const handleReveal = () => {
    setIsShow(!isShow);
  };
  const handleClipboard = () => {
    navigator.clipboard.writeText(item.password);
    setClipboardToast(true);
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
      {clipboardToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success text-white font-semibold">
            <span>Copied to clipboard.</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 bg-white dark:bg-zinc-800 rounded-md shadow-sm">
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

        <div className="hidden gap-3 md:flex md:justify-end">
          <button
            title="Reveal"
            className="hover:scale-110 cursor-pointer"
            onClick={handleReveal}
          >
            {isShow ? (
              <FaRegEye color="white" />
            ) : (
              <FaRegEyeSlash color="white" />
            )}
          </button>
          <button
            title="Copy"
            className=" hover:scale-110 cursor-pointer"
            onClick={handleClipboard}
          >
            <FaRegClipboard color="white" />
          </button>
          <button title="Edit" className=" hover:scale-110 cursor-pointer">
            <BsPencil color="white" />
          </button>
          <button title="Delete" className="hover:scale-110 cursor-pointer">
            <FaTrash color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default VaultifyPasswordItem;
