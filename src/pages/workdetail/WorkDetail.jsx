import { Link } from "react-router-dom";
import "./WorkDetail.scss";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export const WorkDetail = () => {
    return (
        <>
        <Navbar/>
        <div className="work-detail">
            <h1>{`Break Mart`}</h1>
            <div className="sd-container-1">
                <div className="sd-left">Work Name</div>
                <div className="sd-right">
                    <Link to={"/"}>↲ Back</Link>
                </div>
            </div>
            <div className="sd-container-2">
                <div className="sd-left">I am the creative director for Fuzzy Units, a new boutique instrument enterprise focusing on pedals. Our first line of 5 products will be available in late 2023.</div>
                <div className="sd-right">
                    <div className="sdr-left">
                        <p>Year</p>
                        <p>Categories</p>
                    </div>
                    <div className="sdr-right">
                        <p className="sdr-year">2023</p>
                        <p className="sdr-cate">3D</p>
                        <p className="sdr-cate">Tech</p>
                        <p className="sdr-cate">Logo</p>
                    </div>
                </div>
            </div>
            <div className="sd-images">
                <img src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/65527a5d63307c0345608071_Lineup%20baby_1.jpg" alt="" />
                <img src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/6508876b06d869aabe5187ee_TheLine_cover_gif.gif" alt="" />
                <img src="https://assets-global.website-files.com/607f4955f482bd345a7435fd/65527a5d63307c0345608071_Lineup%20baby_1.jpg" alt="" />
            </div>
        </div>
        <Footer/>
        </>
    )
}
