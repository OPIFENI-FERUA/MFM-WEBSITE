import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Sermons from "../pages/Sermons";
import Events from "../pages/Events";
import Ministries from "../pages/Ministries";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";
import Prayer from "../pages/Prayer";
import PrayerPoints from "../pages/PrayerPoints";
import Giving from "../pages/Giving";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="events" element={<Events />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="projects" element={<Projects />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="prayer" element={<Prayer />} />
        <Route path="prayer-points" element={<PrayerPoints />} />
        <Route path="giving" element={<Giving />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;