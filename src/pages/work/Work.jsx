import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import WorkCatCard from "../../components/WorkCatCard"
import "./Work.scss"
import data from "../../assets/data/Work.json"

function Work() {
  // const data =[{
  //   "logourl": "../assets/images/2.png",
  //   "title": "My Work",
  //   "points": [
  //     "Completed project A",
  //     "Started project B",
  //     "Met with client C",
  //     "Researched technology D"
  //   ]
  // },]
  return (

    <>
       <Navbar />
       <div className="work-top-section">
        <h1>Here’s everything we can do for you, and much more.</h1>
        <p>With conceptualisation, ideation, design, animation, filming, production, and final renders, we help you bring your brands vision to life through our work.</p>
       </div>
       {data.map((item, index) => (
         <WorkCatCard key={index} item = {item} />
       ))}
       <Footer />
    </>
  )
}

export default Work