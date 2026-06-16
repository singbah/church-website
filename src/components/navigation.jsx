export default function NavBar() {
  return (
    <header className="flex justify-center items-center sticky top-0 bg-black">
      <nav className="flex justify-start gap-6 overflow-x-auto text-white p-4">
        <a href="/" className="">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/">Lessions</a>
        <a href="/">Galary</a>
      </nav>
    </header>)
}