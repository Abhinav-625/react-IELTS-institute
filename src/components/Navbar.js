import './styling/Navbar.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand me-5" to="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    IELTS INSTITUTE
                </Link>
                <button className="navbar-toggler custom-menu-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav column-gap-4">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/testimonials">Student Testimonials</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav column-gap-4 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary me-5 rounded-pill custom-btn-nav">Get Started</button>
                </div>
            </div>
        </nav>
    );
}