
import { FaWhatsapp, FaPhone, FaClock, FaLocationArrow } from "react-icons/fa"
import { useNavigate } from "react-router-dom"



export default function ContactSection() {
  const navigate = useNavigate()

  return (<div className="flex flex-col justify-center items-center my-20 m-4">
    <section className="p-4 m-8">
      <h1 className="text-4xl font-bold text-blue-800 text-center">Study Schedules</h1>
      <p className="text-center text-sm font-bold">Book A Study Schedule from the list below</p>
    </section>

    <section className="m-2 rounded-2xl text-center w-full">
      <h1 className="p-2 font-bold text-2xl">Monday 10:00AM - 12:00PA</h1>
      <h1 className="p-2 font-bold text-2xl">Saturday 10:00AM - 12:00PA</h1>
    </section>

    <section>
      <form className="flex flex-col m-8 border p-4 shadow-2xl rounded-2xl border-gray-300">
        <h3 className="font-bold">Please leave a Comment</h3>
        <label>
          username
          <input
            className="border m-3 p-1 rounded"
            type="text"
            name="username" />
        </label>

        <textarea
          className="border rounded-2xl h-50 p-2 text-md"
          placeholder="leave a comment"
          name="textArea"></textarea>
        <button className="bg-blue-600 m-4 text-2xl font-bold text-white rounded-xl shadow-xl">submit</button>
      </form>
    </section>

    <a
      className="bg-green-600 px-6 p-2 rounded-2xl text-white font-bold shadow-2xl shadow-black"
      href="/">
      BOOK NOW
    </a>
  </div>)
}
    