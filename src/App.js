import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import aos from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
