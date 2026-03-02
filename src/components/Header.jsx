import logo from '../assets/logo.png'
import { darkestBg, lightBg, lightestFg, lightFg } from './Colors'
import './styles/Header.css'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {
    const navigator = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg" style={darkestBg}>
            <div className="container-fluid">
                <Link className="navbar-brand me-5" to="/" style={lightestFg}>
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    IELTS INSTITUTE
                </Link>
                <button className="navbar-toggler fs-6 border-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={lightFg}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-lg-auto">
                        <Link className="nav-link mx-lg-3 link-el" to="/" style={lightestFg}>Home</Link>
                        <Link className="nav-link mx-lg-3 link-el" to="./features" style={lightestFg}>Features</Link>
                        <Link className="nav-link mx-lg-3 link-el" to="/testimonials" style={lightestFg}>Student Testimonials</Link>
                    </div>
                    <div className="navbar-nav me-lg-5 align-items-start">
                        <Link className="nav-link link-el" to="/login" style={lightestFg}>Login</Link>
                        <button className="btn rounded-5 enrollBtn" type="button" style={lightBg} onClick={() => navigator('/register')}>Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header