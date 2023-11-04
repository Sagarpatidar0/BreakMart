import "../styles/WorkCatCard.scss";
import PropTypes from 'prop-types';

const WorkCatCard = ({ item }) => {
    return (
        <div className="work-cat-card">
            <div className="left">
                <div className="wcc-sno">
                    {item["Sno"]}
                </div>
                <div className="wcc-logo">
                    <img src={item["logourl"]} alt="" />
                </div>
                <div className="wcc-detail">
                    <p>{item.title}</p>
                    <ul>
                        {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <a href="#">
                        <button>View Work</button>
                    </a>
                </div>
            </div>
            <div className="right">
                <img src="https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg" alt="Work" />
            </div>
        </div>
    )
}

WorkCatCard.propTypes = {
    item: PropTypes.shape({
        Sno: PropTypes.number.isRequired,
        logourl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default WorkCatCard