import React, { lazy, Suspense } from "react";
// import ParticlesBackground from "./components/ParticlesBackdround"
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

AOS.init();

const LandingPage = lazy(() => import("./components/LandingPage"));

const App = () => {
  return (
    <div className="App">
      <ToastContainer
        style={{ width: "300px", height: "50px" }} // smaller container
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      {/* <ParticlesBackground /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
    </div>
  );
};

export default App;
