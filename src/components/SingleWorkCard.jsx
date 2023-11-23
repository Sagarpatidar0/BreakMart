import { Link } from "react-router-dom";
import "../styles/SingleWorkCard.scss"
import PropTypes from 'prop-types';

function SingleWorkCard({ work, id }) {
    return (
        <div className="single-work-card" id={id}>
            <Link to={id == "categories" ? "/category" : "/work"} className="swc-name">{work.name}</Link>
            <Link to={id == "categories" ? "/category" : "/work"} >
                <img src={work.imgurl} alt="" />
            </Link>
        </div>
    )
}



SingleWorkCard.propTypes = {
    // Define prop types here
    work: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgurl: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
};



export default SingleWorkCard