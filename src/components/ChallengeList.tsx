import { Link, useLoaderData } from "react-router-dom"
import { ChallengeListStructure, getChallenges } from "../data/challenges/challenges_data";

import './scss/_challenge-list.scss'
import AnimateOnScroll from "../utils/AnimateOnScroll";

export function loader() {
    const challenges = getChallenges();
    return challenges
}
export const ChallengeList = () => {
    const challenges = useLoaderData() as ChallengeListStructure[];
    return (
        <ol className="challenge-wrapper" role="list">
            {challenges.map((challenge, idx) => <li className="challenge-item" key={challenge.id}>
                <AnimateOnScroll options={
                    {
                        type: 'scale-in',
                        delay: idx < 8 ? 200 * idx : 200 * (idx % 4)
                    }
                }>
                    <Link to={challenge.id}>
                        <img loading="lazy" src={challenge.image ? `/challenges/${challenge.id}/${challenge.image}` : '/no-preview.jpeg'} />
                        <div className="description">
                            <h3>{challenge.title}</h3>
                        </div>
                    </Link>
                </AnimateOnScroll>
            </li>)}
        </ol>
    )
}
