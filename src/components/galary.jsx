import { HiH3 } from "react-icons/hi2"
import boyPhoto from "../data/photos/boy.jpg"
import moonPhoto from "../data/photos/moon.jpg"
import pathPhoto from "../data/photos/path.jpg"
import womanPhoto from "../data/photos/woman.png"

export default function Galary() {
  return (<div className="">
    <h1 className="p-4 text-2xl text-center font-bold">See Our Art of kindness and creative memories</h1>
    
    <section className="lg:grid lg:grid-cols-2 lg:mx-10">

      <article className="p-4 m-4">
        <h3
          className="m-4 border-b-2 p-2 border-t-amber-600 border-t-2">The graduation ceremony of our pastors from a traing program offer by the CLS online bible collage
        </h3>
        <img
          className="h-100 w-full"
          src={womanPhoto} alt="" />
      </article>

    </section>
  </div>)
}