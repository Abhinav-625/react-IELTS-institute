import home from '../assets/home.png'
import { lightBg } from './Colors'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const blurDivChild = isSmall
        ? {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem 0',
            width: '70%'
        } : {}

    const navigator = useNavigate()

    return (
        <div className='d-flex'>
            <div className='w-100 w-md-50 ms-md-5 d-flex align-items-center justify-content-center position-relative' style={{minHeight: '60vh'}}>
                {isSmall ? <img src={home} className='img-fluid position-absolute object-fit-contain top-0 h-100 z-0 opacity-25'/> : null}
                <div className='z-1' style={blurDivChild}>
                    <p className='fs-1 fw-bold'>IELTS</p>
                    <p className={`fs-4 ${isSmall ? 'text-center' : ''}`}>Online & Offline<br />Courses</p>
                    <p className={`fs-5 ${isSmall ? 'text-center' : ''}`}>A learning platform based on practical knowledge with best & world class mentors.</p>
                    <button className="btn px-md-5 border border-black enrollBtn" type="button" style={lightBg} onClick={() => navigator('/register')}>Enroll Now</button>
                </div>
            </div>
            <div className='container w-md-50 d-none d-md-flex justify-content-center'>
                <img src={home} className='object-fit-contain img-fluid' alt='loading...' />
            </div>
        </div>
    )
}

export default Home