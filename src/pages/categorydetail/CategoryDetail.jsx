import { Link } from "react-router-dom";
import "./CategoryDetail.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SingleWorkCard from "../../components/SingleWorkCard";

export const CategoryDetail = () => {
  const category = [
    {
      name: "Break Mart",
      imgurl:
        "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg",
    },
    {
      name: "Break Mart",
      imgurl:
        "https://uploads-ssl.webflow.com/607f4955f482bd345a7435fd/649094b9cb2ac9b32496b0b2_FuzzyUnits_hero-p-1080.jpg",
    },
    {
      name: "Break Mart",
      imgurl:
        "https://uploads-ssl.webflow.com/607f4955f482bd345a7435fd/6482900feb52f0b64901d306_leaving_magic_door_hero-p-1080.jpg",
    },
  ];

  var id = "categoryDetail";
  return (
    <>
      <Navbar />
      <div className="category-detail">
        <h1>{`Break Mart`}</h1>
        <div className="sd-container-1">
          <div className="sd-left">Category Name</div>
          <div className="sd-right">
            <Link to={"/"}>↲ Back</Link>
          </div>
        </div>
        <div className="category-cards">
          <SingleWorkCard work={category[0]} id={id} />
          <SingleWorkCard work={category[1]} id={id} />
          <SingleWorkCard work={category[2]} id={id} />
          <SingleWorkCard work={category[0]} id={id} />
          <SingleWorkCard work={category[2]} id={id} />
          <SingleWorkCard work={category[0]} id={id} />
          <SingleWorkCard work={category[2]} id={id} />
        </div>
        {/* <div className="sd-images">
          <img
            src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/65527a5d63307c0345608071_Lineup%20baby_1.jpg"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/6508876b06d869aabe5187ee_TheLine_cover_gif.gif"
            alt=""
          />
          <img
            src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/65527a5d63307c0345608071_Lineup%20baby_1.jpg"
            alt=""
          />
        </div> */}
      </div>
      <Footer />
    </>
  );
};
