import { useEffect, useState } from "react";

function Login({ setIsAuthenticated }) {
  const [isToast, setIsToast] = useState(false);

  const handleFunction = (e) => {
    if (e.target.value === "Sumit123") {
      setIsAuthenticated(true);
    } else {
      setIsToast(true);
    }
  };

  useEffect(() => {
    if (isToast === true) {
      const timer = setTimeout(() => {
        setIsToast(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isToast]);

  return (
    <>
      {isToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error text-white font-semibold">
            <span>Invalid Password!</span>
          </div>
        </div>
      )}
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <label htmlFor="password" className="tracking-wide">
            ENTER MASTER PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input border-red-400 hover:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleFunction(e)}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
