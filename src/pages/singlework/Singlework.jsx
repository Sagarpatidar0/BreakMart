import { useEffect } from "react";
import WorkCards from "../../components/WorkCards"
import "./Singlework.scss"
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Singlework = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    const { cate } = useParams();

    const data = [{
        title: "Featured Works",
        // works: {
        //     name: "Break Mart",
        //     imgurl: "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg",
        // }
    },{
        title: "Categories",
        // works: {
        //     name: "Break Mart",
        //     imgurl: "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg",
        // }
    }]
  return (
    <>
    <Navbar/>
    <div className="Singlework">
        <h1>{`Break Mart${cate}`}</h1>
        <div className="sw-container">
            <div className="sw-left">
                <a href="#featured" >Featured Works</a>
                <a href="#categories" >Categories</a>
            </div>
            <div className="sw-right">
                <h1>Right</h1>
            </div>
        </div>
        <div className="sw-video">
        </div>
         <WorkCards data={data[0]} />
         <WorkCards data={data[1]} />
        
    </div>
    <Footer />
    </>
  )
}


export default Singlework
