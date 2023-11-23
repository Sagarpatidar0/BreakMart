import { Link } from "react-router-dom";
import "./CategoryDetail.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export const CategoryDetail = () => {
  return (
    <>
    <Navbar/>
      <div className="category-detail">
        <h1>{`Break Mart`}</h1>
        <div className="sd-container-1">
          <div className="sd-left">Category Name</div>
          <div className="sd-right">
            <Link>↲ Back</Link>
          </div>
        </div>
        <div className="sd-images">
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
        </div>
      </div>
      <Footer/>
    </>
  );
};
