import star from './assets/star.png'


export default function T_card({ image, name, program, para, num }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < num; i++) {
            stars.push(<img src={star} alt="Rating" width="20" height="20" className="d-inline-block align-text-top" />);
        }
        return stars;
    }

    return (
        <div className="card-deck">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="text-muted">IELTS ACADEMIC - {program}</p>
                    <small className="card-text">{para}</small>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    {renderStars()}
                </div>
            </div>
        </div>
    );
}