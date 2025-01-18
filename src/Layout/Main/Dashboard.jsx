import { useState } from "react";
import DashboardSideNav from "../../components/DashboardSideNav/DashboardSideNav";
import { Outlet } from "react-router-dom";
import DashboardStaticNav from "../../components/DashboardStaticNav/DashboardStaticNav";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className=" lg:grid lg:grid-cols-12">
      <div className=" lg:hidden">
        <DashboardSideNav
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          open={open}
        />
      </div>
      <div className=" hidden lg:block  lg:col-span-3 xl:col-span-2">
        <DashboardStaticNav />
      </div>
      <div className=" lg:col-span-9 xl:col-span-10 lg:overflow-y-scroll lg:h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
