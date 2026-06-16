import ContactSection from "./components/contact"
import AboutUs from "./components/about"
import HomeDashboard from "./home"
import NavBar from "./components/navigation"

import { Route, Routes } from "react-router-dom"


export default function App() {
  return (<>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeDashboard/> } />
      <Route path="/about-us" element={<AboutUs/> } />
      <Route path="/contact" element={<ContactSection/> } />
    </Routes>
  </>)
}