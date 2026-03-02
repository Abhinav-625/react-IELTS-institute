import { useNavigate } from "react-router-dom"

const Card = ({head, img, link}) => {
    const navigator = useNavigate()
    return (
        <div className="card w-25 flex-grow-1" style={{minWidth: '18rem', maxWidth: '22rem'}} onClick={() => navigator(link)}>
            <img src={img} className="card-img-top" alt={head} />
            <div className="card-body">
                <p className="card-text fw-semibold">{head}</p>
            </div>
        </div>
    )
}

export default Card