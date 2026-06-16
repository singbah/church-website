import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <header className="flex justify-center items-center sticky top-0 bg-black">
      <nav className="flex justify-start gap-6 overflow-x-auto text-white p-4">
        <a onClick={() => navigate("/")} className="">Home</a>
        <a onClick={() => navigate("/about-us")} className="whitespace-nowrap cursor-pointer">About Us</a>
        <a
          onClick={() => navigate("/contact")}
          className="whitespace-nowrap cursor-pointer">Contact</a>
        <a onClick={() => navigate("/lesson")} className="whitespace-nowrap cursor-pointer">Lessions</a>
        <a onClick={() => navigate("/galary")} className="whitespace-nowrap cursor-pointer">Galary</a>
      </nav>
    </header>)
}