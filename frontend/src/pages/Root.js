import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  const navigation = useNavigate();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
