import logo from './assets/logo.png'
import './styling/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container-fluid px-5 div-fo-1" >
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                <div className="col mb-3">
                    <Link to="/" className="d-flex align-items-center mb-3 text-decoration-none">
                        <img src={logo} alt="Logo" width="60" height="48" className="d-inline-block align-text-top" />
                    </Link>
                    <p>© 2025</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 custom-link-fo">Features</Link></li>
                        <li className="nav-item mb-2"><Link to="/testimonials" className="nav-link p-0 custom-link-fo">Testimonials</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">FAQs</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">About</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Social</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Facebook</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Instagram</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">LinkedIn</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Twitter</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">YouTube</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Legal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Terms of service</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Privacy policy</Link></li>
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo">Cookie policy</Link></li>
                    </ul>
                </div>
            </footer>
        </div >
    );
}