import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./Header"
import Home from './Home'
import Footer from './Footer'
import Features from './Features'
import Testimonials from './Testimonials'
import Enroll from './Enroll'
import { darkBg, lightestBg } from "./Colors"
import About from "./About"
import Tos from './Tos'
import Pp from './Pp'

function Layout() {
    return (
        <>
            <div className={useLocation().pathname === '/login' || useLocation().pathname === '/register' ? 'd-flex flex-column vh-100' : ''} style={useLocation().pathname === '/login' || useLocation().pathname === '/register' ? darkBg : lightestBg}>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/login' element={<Enroll role='login' />} />
                    <Route path='/register' element={<Enroll role='register' />}></Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/t-o-s" element={<Tos />} />
                    <Route path="/privacy-policy" element={<Pp />} />
                </Routes>
                {useLocation().pathname === '/login' || useLocation().pathname === '/register' ? <></> : <Footer />}
            </div>
        </>
    )
}
export default Layout