import ContactSection from "./components/contact"
import AboutUs from "./components/about"
import NavBar from "./components/navigation"
import Galary from "./components/galary"
import Lession from "./components/lessions"
import HomeDashboard from "./components/home"
import ViewLessonPage from "./components/viewLesson"

import { Route, Routes } from "react-router-dom"


export default function App() {
  return (<>
    <NavBar/>
    <Routes>
      <Route path="/about-us" element={<AboutUs/> } />
      <Route path="/" element={<HomeDashboard/> } />
      <Route path="/contact" element={<ContactSection/> } />
      <Route path="/galary" element={<Galary/> } />
      <Route path="/lesson" element={<Lession/> } />
      <Route path="/view-lesson" element={<ViewLessonPage/> } />
    </Routes>
  </>)
}