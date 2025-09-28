import T_card from './T_card'
import './styling/Testimonials.css'
import s1 from './assets/s1.png'
import s2 from './assets/s2.png'

export default function Testimonials(){
    return(
        <div className="container-fluid p-5 d-flex justify-content-center div-t1">
            <div className="row row-cols-1 row-cols-md-3 g-4 mw-100 pb-5 justify-content-center">
                <T_card
                image={s1}
                name='Name 1'
                program='IELTS Crash Course'
                para='An amazing academy with awesome faculty. They care about the students and help individual students overcome their weakness in specific modules. I was able to score a band 7.5 with them. I highly recommend this institute for students aspiring for higher studies abroad.'
                num='4'
                />
                <T_card
                image={s2}
                name='Name 2'
                program='IELTS Master Course'
                para=" The courses were excellent. All our practice sheets were corrected, and we were given very good feedback on our weak points to ensure that we scored the Maximum band in the Exam. They put in a lot of effort to prepare us not only for IELTS but also to gain managerial prowess and many life skills. I strongly suggest this academy if you want to ace your IELTS exam and learn a lot of communication skills that will help you for Life."
                num='5'
                />
            </div>
        </div>
    );
}