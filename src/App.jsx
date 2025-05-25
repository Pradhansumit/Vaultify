import { useState } from "react";
import Login from "./pages/Login";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <h1>Welcome</h1>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
