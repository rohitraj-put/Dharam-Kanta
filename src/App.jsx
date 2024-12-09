import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import { Dashboard } from "./app/Dashboard";
import MyContext from "./MyContext/MyContext";
import Loading from "./layout/loading/Loading";
import Cashbook from "./layout/Cashbook/Cashbook";
import Home from "./page/Home";
import Profile from "./page/Profile";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  const toggleSidebar = () => {
    console.log("hell rohit");
    setSidebarOpen(!isSidebarOpen);
  };

  const rohit = "hello rohit";
  return (
    <>
      <MyContext.Provider value={rohit}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="ml-[250px] flex-1 max-md:ml-[5px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bussiness" element={<h1>bussiness</h1>} />
              <Route path="/cashbook/:cashId" element={<Cashbook />} />
              <Route path="/cashbooks-settings" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default Layout;
