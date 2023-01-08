import { BrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../SideBar/Sidebar";
import "./MainApp.css";

function MainApp() {
  return (
    <div className="MainApp">
      <BrowserRouter>
        <Sidebar />

        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default MainApp;

