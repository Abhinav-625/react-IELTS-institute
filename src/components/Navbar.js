import './styling/Navbar.css'
import logo from './assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand me-5" href="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    IELTS INSTITUTE
                </a>
                <button className="navbar-toggler custom-menu-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav column-gap-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/testimonials">Student Testimonials</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav column-gap-4 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-primary me-5 rounded-pill custom-btn-nav">Get Started</button>
                </div>
            </div>
        </nav>
    );
}