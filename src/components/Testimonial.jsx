import star from '../assets/star.png'

function Testimonial({ title, course, para, img, stars }) {
  const renderStars = () => {
    const finalStars = []
    for(let i = 0; i < stars; i++){
      finalStars.push(<img src={star} alt='rating' width='20' height='20' />)
    }
    return (finalStars)
  }
  return (
    <div className="card" style={{ minWidth: '18rem', maxWidth: '22rem' }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{course}</p>
        <p className="fw-light">{para}</p>
      </div>
      <div className="card-footer align-items-center d-flex justify-content-center gap-1">
        {renderStars()}
      </div>
    </div>
  )
}

export default Testimonial