import { Link, useLoaderData } from "react-router-dom";
import { ChallengeListStructure, getChallenge } from "../data/challenges/challenges_data"
import './scss/_challenge.scss'

interface loaderParams {
    challengeId: string
}
export function loader({ params }: { params: loaderParams }) {
    const challenge = getChallenge(params.challengeId);
    return challenge
}
const Challenge = () => {
    const challenge = useLoaderData() as ChallengeListStructure;
    return (
        <div className="challenge container">
            <div className="challenge-header">
                <Link to={'/challenges'}>Back to challenges list</Link>
                <div className="title">{challenge.title}</div>
            </div>
            <section className="content">
                {challenge.element}
            </section>
        </div>
    )
}

export default Challenge