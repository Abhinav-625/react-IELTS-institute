import './styling/F_card.css'

export default function F_card({title, image, alt}) {
    return (
        <div className="col">
            <div className="card h-100 div-fc-1">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <img src={image} className="card-img-top" alt={alt} />
            </div>
        </div>
    );
}