import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container m-3">
        <div className="row vh-100">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;