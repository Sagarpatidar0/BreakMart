import SingleWorkCard from "./SingleWorkCard"
import PropTypes from 'prop-types';
import "../styles/WorkCards.scss"

const WorkCards = ({data}) => {
    const works = [{
        name: "Break Mart",
        imgurl: "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-8.jpg",
    },
    {
        name: "Break Mart",
        imgurl: "https://uploads-ssl.webflow.com/607f4955f482bd345a7435fd/649094b9cb2ac9b32496b0b2_FuzzyUnits_hero-p-1080.jpg"
    },
    {
        name: "Break Mart",
        imgurl: "https://uploads-ssl.webflow.com/607f4955f482bd345a7435fd/6482900feb52f0b64901d306_leaving_magic_door_hero-p-1080.jpg"
    }
    ]

    if (data.title == "Featured Works") {
        var id = "featured-container"
    }else{
        id = "categories"
    }

    return (
        <>
            <h2  id={data.title=="Featured Works"?"featured":"categories"} className="sw-h2">● {data.title}</h2>
            <div className="work-cards">
                <SingleWorkCard work={works[0]} id={id} />
                <SingleWorkCard work={works[1]} id={id} />
                <SingleWorkCard work={works[2]} id={id} />
                <SingleWorkCard work={works[0]} id={id} />
                <SingleWorkCard work={works[2]} id={id} />
                <SingleWorkCard work={works[0]} id={id} />
                <SingleWorkCard work={works[2]} id={id} />
            </div>
        </>
    )
}


WorkCards.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        works: PropTypes.object,
    }).isRequired,
};

export default WorkCards