import { FaDownload } from "react-icons/fa";
import { Download, Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import photo from "../data/photos/logo1.jpeg"
import lesson from "../data/lessons";
import { LessonContext } from "./lessonContex";
import { useContext } from "react";

export default function Lession() {
  const {lessonItem, setLesson} = useContext(LessonContext)

  return (<div>
    <h1 className="p-2 text-xl font-bold bg-green-600 text-center">Live Changing message</h1>
    <div className="lg:grid p-2 lg:grid-cols-3">
      {lesson.map((item, index) => <section
        onClick={() =>setLesson(item)}
        key={index}
        className="bg-amber-50 border p-2 flex flex-col my-4 m-2 rounded shadow">
        <h3 className="font-bold text-2xl text-center m-2">{item.title}</h3>
        <img
          className="h-100"
          src={item.photo} alt="photo" />
        <p className="text-left font-semibold">{item.hints}</p>
        <article className="flex justify-center items-center bg-amber-50 w-full shadow shadow-amber-300 p-2 gap-6">
          <ThumbsUp className="text-blue-800 active:scale-110 transition cursor-pointer" size={30}/>
          <ThumbsDown className="text-red-800 active:scale-110 transition cursor-pointer" size={30}/>
          <Heart className="text-red-400 active:scale-110 transition cursor-pointer" size={30}/>
          <input
            className="border w-21 rounded text-sm p-1"
            placeholder="comment"
            type="text"
            name="comment"
            id="comment" />
          <a className="bg-green-500 px-2 rounded shadow-xs shadow-black active:scale-110 font-bold"><Download className="inline cursor-pointer"/></a>
        </article>
      </section>)}
    </div>
  </div>)
}