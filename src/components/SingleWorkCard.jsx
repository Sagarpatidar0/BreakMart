import "../styles/SingleWorkCard.scss"
import PropTypes from 'prop-types';

function SingleWorkCard({work}) {
    return (
        <div className="single-work-card">
            <a href="#" className="swc-name">{work.name}</a>
            <a href="#"><img src={work.imgurl} alt="" /></a>
        </div>
    )
}



SingleWorkCard.propTypes = {
    // Define prop types here
    work : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgurl: PropTypes.string.isRequired,
    }).isRequired,
};



export default SingleWorkCard