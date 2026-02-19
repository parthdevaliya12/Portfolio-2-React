import React, { lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

AOS.init();

const LandingPage = lazy(() => import("./components/LandingPage"));

const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      <Toaster position="top-right" />
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <LandingPage />
      </Suspense>
    </div>
  );
};

export default App;
