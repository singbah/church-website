import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaFaceAngry, FaX } from "react-icons/fa6";

import NavBar from "./navigation";
import bgPhoto from "../data/photos/logo.jpg"


export default function HomeDashboard() {
  return (
    <div
      style={{backgroundImage:bgPhoto}}
      className="bg-gray-500 bg-blend-multiply text-white flex flex-col justify-center items-center bg-cover bg-center h-screen"
    >
      
      <h1 className="text-6xl font-bold text-center">Welcome To</h1>
      <h1 className="text-4xl font-bold text-center p-4 m-3">Bible Study With Pst. Davidson SM. Morris</h1>

    <section className="flex flex-col justify-center m-3">
      <p className="text-xl text-center p-4 italic"></p>
      <article className="flex gap-10  rounded p-2 m-2 shadow-white shadow-xs justify-center">
          <a href="/">
            <FaFacebookF className="m-1 hover:scale-110 text-blue-600 transition active:scale-11" size={30}/>
          </a>
          <a href="tel:0775390208">
            <FaPhone className="m-1 hover:scale-110 text-green-400 transition active:scale-11" size={30} />
          </a>
          <a href="https://wa.me/231775390208">
            <FaWhatsapp className="m-1 hover:scale-110 text-green-500 transition active:scale-11" size={30} />
          </a>
      </article>
      </section>

      <section className="m-9">
        <a
          className="bg-orange-500 p-2 px-6 rounded-2xl font-bold text-xl cursor-pointer active:scale-110 hover:scale-110"
          href="tel:+231880868634">Donate</a>
      </section>
  </div>)
}