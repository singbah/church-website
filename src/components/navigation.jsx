import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <header className="flex justify-center items-center sticky top-0 bg-black">
      <nav className="flex justify-start gap-6 overflow-x-auto text-white p-4">
        <a href="/" className="">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/lession">Lessions</a>
        <a href="/galary">Galary</a>
      </nav>
    </header>)
}