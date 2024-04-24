import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AppBar } from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#f9e3cc",
            color: "#f57a38",
            marginTop: "25px",
          },
        }}
      />
    </div>
  );
};
