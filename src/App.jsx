import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import { Dashboard } from "./app/Dashboard";
import MyContext from "./MyContext/MyContext";

function Layout() {
  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };
  const rohit = "hello rohit";
  return (
    <>
      <MyContext.Provider value={rohit}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="ml-[250px] flex-1 max-md:ml-[5px]">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bussiness" element={<h1>bussiness</h1>} />
              <Route path="/cashbooks" element={<h1>cashbooks</h1>} />
              <Route
                path="/cashbooks-settings"
                element={<h1>cashbooks-settings</h1>}
              />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default Layout;
