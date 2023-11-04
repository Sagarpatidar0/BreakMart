import WorkCards from "../../components/WorkCards"
import "./Singlework.scss"
const Singlework = () => {
    
  return (
    <div className="Singlework">
        <h1>Break Mart</h1>
        <div className="sw-container">
            <div className="sw-left">
                <a href="#">Work</a>
                <a href="#">Featured</a>
                <a href="#">Categories</a>
                <a href="#">info</a>
            </div>
            <div className="sw-right">
                <h1>Right</h1>
            </div>
        </div>
            <WorkCards />
        
    </div>
  )
}

export default Singlework
