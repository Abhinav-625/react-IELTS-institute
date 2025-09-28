import speaking from './assets/speaking.png'
import mock from './assets/mock.png'
import score from './assets/score.png'
import './styling/Features.css'
import F_card from './F_card'

export default function Features() {
    return (
        <div className='container-fluid p-5 d-flex justify-content-center div-f1'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mw-100 pb-5 justify-content-center">
                <F_card
                    title='English Speaking Practice'
                    image={speaking}
                    alt='English speaking practice'
                />
                <F_card
                    title='Mock Tests'
                    image={mock}
                    alt='Mock tests'
                />
                <F_card
                    title='AI Band Score'
                    image={score}
                    alt='AI band score'
                />
            </div>
        </div>
    );
}