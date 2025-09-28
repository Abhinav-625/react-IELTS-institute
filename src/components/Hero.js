import hero from './assets/hero.png'
import './styling/Hero.css'

export default function Hero() {
    return (
        <div className="container-fluid p-0 div-h1">
            <div className="row g-0 d-flex align-items-center div-h2">
                <div className="col-12 col-sm-6 d-none d-sm-flex flex-column justify-content-center p-5 text-start">
                    <p className="fs-1 fw-bold">IELTS</p>
                    <p className="fs-4">Online & Offline<br />Courses</p>
                    <p className="fs-5">A learning platform based on practical knowledge with best & world class mentors.</p>
                    <button type="button" className="btn btn-primary me-2 custom-btn-hero me-auto px-5">Enroll Now</button>
                </div>

                <div className="col-12 col-sm-6 position-relative">
                    <img className="img-fluid w-100 d-none d-sm-block" src={hero} alt="Girl holding laptop" />
                    <img className="img-fluid w-100 d-block d-sm-none opacity-25" src={hero} alt="Girl holding laptop" />

                    <div className="d-sm-none position-absolute bottom-0 text-center px-3 pb-3">
                        <p className="fs-1 fw-bold">IELTS</p>
                        <p className="fs-4">Online & Offline<br />Courses</p>
                        <p className="fs-5">A learning platform based on practical knowledge with best & world class mentors.</p>
                        <button type="button" className="btn btn-primary me-2 custom-btn-hero">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}