import SingleWorkCard from "./SingleWorkCard"
import "../styles/WorkCards.scss"

const WorkCards = () => {
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
    return (
        <>
            <h2 className="sw-h2">● Featured</h2>
            <div className="work-cards">
                <SingleWorkCard work={works[0]} />
                <SingleWorkCard work={works[1]} />
                <SingleWorkCard work={works[2]} />
                <SingleWorkCard work={works[0]} />
                <SingleWorkCard work={works[2]} />
                <SingleWorkCard work={works[0]} />
                <SingleWorkCard work={works[2]} />
            </div>
        </>
    )
}

export default WorkCards