
const h3Style = "text-xl font-bold text-center py-2 "
const pStyle = "p-2 text-l text-center"

export default function AboutUs() {
  
  return (
    <div className="h-screen relative">
    <div className="p-4 lg:mx-40 lg:border overflow-y-auto">
    
    <h1 className="text-center p-4 font-extrabold text-2xl">About Bible Study with Pst. Davidson SM Morris</h1>
    <p className={pStyle}>Brief history</p>

    <h3 className={h3Style}>Our Story</h3>
    <p className={pStyle}>Story about your mission goes here</p>
    
    <h3 className={h3Style}>Mission</h3>
    <p className={pStyle}>mission statement</p>

    <h3 className={h3Style}>Our Community  </h3>
    <p className={pStyle}>Meat our leaders</p>

    <h3 className={h3Style}>Our Promise  </h3>
    <p className={pStyle}>this is our promise </p>
  </div>
  </div>)
}