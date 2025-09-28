import logo from './assets/logo.png'
import './styling/Footer.css'

export default function Footer() {
    return (
        <div className="container-fluid px-5 div-fo-1" >
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
                        <img src={logo} alt="Logo" width="60" height="48" className="d-inline-block align-text-top" />
                    </a>
                    <p>© 2025</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Home</a></li>
                        <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 custom-link-fo">Features</a></li>
                        <li className="nav-item mb-2"><a href="/testimonials" className="nav-link p-0 custom-link-fo">Testimonials</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">About</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Social</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Facebook</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Instagram</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">LinkedIn</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Twitter</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">YouTube</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Legal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Terms of service</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Privacy policy</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 custom-link-fo">Cookie policy</a></li>
                    </ul>
                </div>
            </footer>
        </div >
    );
}