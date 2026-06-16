import { useContext, useMemo } from "react"
import { LessonContext } from "./lessonContex"
import { Download, Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewLessonPage() {
  const { lessonItem, setLesson } = useContext(LessonContext)
  
  const navigate = useNavigate()
  useMemo(() => {
    lessonItem
  }, [])
  

  if(lessonItem){return (<div className="h-screen p-2">
    <img
      className="h-150 w-full"
      src={lessonItem.photo} alt="photl" />
    <h1
      className="p-4 text-2xl font-bold"
    >{lessonItem.title}</h1>
    <p className="py-4">{lessonItem.msg}</p>

    <article className="sticky bottom-0 flex justify-center items-center bg-amber-50 w-full shadow shadow-amber-300 p-2 gap-6">
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
  </div>)
  } else {
    return (<div className="h-screen justify-center items-center flex">
      <button
        onClick={() => navigate("/lesson")}
        className="bg-blue-500 px-8 font-bold text-white text-2xl p-3 rounded shadow-2xl shadow-black active:scale-110 active:bg-blue-800 transition">See More Lesson</button>
    </div>)
  }
}