import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LessonContext = createContext(null)

export default function LessonProvider({ children }) {
  const [lessonItem, setLessonItem] = useState(null);
  const navigate = useNavigate()
  function setLesson(lesson) {
    setLessonItem(lesson)
    navigate("/view-lesson")
    return;
  }
  return (<LessonContext.Provider value={{
    lessonItem, setLesson
  }}>
    {children}
  </LessonContext.Provider>)
}