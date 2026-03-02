import Testimonial from './Testimonial'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'

const Testimonials = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 p-5">
            <Testimonial
                title = 'Heading'
                course = 'Course'
                para = 'Para for this heading...'
                img = {s1}
                stars = '4'
            />
            <Testimonial
                title = 'Heading'
                course = 'Course'
                para = 'Para for this heading...'
                img = {s2}
                stars = '6'
            />
        </div>
    )
}

export default Testimonials