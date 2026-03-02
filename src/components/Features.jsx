import { lightestBg } from "./Colors"
import Card from './Card'
import speaking from '../assets/speaking.png'
import mock from '../assets/mock.png'
import score from '../assets/score.png'

const Features = () => {
    return (
        <div className="d-flex justify-content-center p-5 flex-wrap gap-3">
            <Card
                head = 'English Speaking Practice'
                img = {speaking}
                link = '/features/eng-practice'
            />
            <Card
                head = 'Mock Tests'
                img = {mock}
                link = '/features/mock-tests'
            />
            <Card
                head = 'AI Band Score'
                img = {score}
                link = '/features/score'
            />
        </div>
    )
}

export default Features