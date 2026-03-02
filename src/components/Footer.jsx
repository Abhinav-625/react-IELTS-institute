import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {darkestBg, lightestFg} from './Colors'

const Footer = () => {
    return (
        <div className="container-fluid px-5 div-fo-1" style={darkestBg}>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5" style={lightestFg}>
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
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Features</Link></li>
                        <li className="nav-item mb-2"><Link to="/testimonials" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Testimonials</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>About</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Social</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://facebook.com" target='_black' rel='noopener noreferrer' className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Facebook</a></li>
                        <li className="nav-item mb-2"><a href="https://instagram.com" target='_black' rel='noopener noreferrer' className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Instagram</a></li>
                        <li className="nav-item mb-2"><a href="https://linkedin.com" target='_black' rel='noopener noreferrer' className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>LinkedIn</a></li>
                        <li className="nav-item mb-2"><a href="https://youtube.com" target='_black' rel='noopener noreferrer' className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>YouTube</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Legal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/t-o-s" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Terms of service</Link></li>
                        <li className="nav-item mb-2"><Link to="/privacy-policy" className="nav-link p-0 custom-link-fo link-el" style={lightestFg}>Privacy policy</Link></li>
                    </ul>
                </div>
            </footer>
        </div >
    )
}

export default Footer