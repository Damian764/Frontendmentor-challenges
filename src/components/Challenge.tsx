import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardArrowLeft, MdOpenInFull } from "react-icons/md";


import { ChallengeListStructure, getChallenge } from "../data/challenges/challenges_data"
import './scss/_challenge.scss'

export function loader({ params }: any) {
    const challenge = getChallenge(params.challengeId);
    return challenge
}
const Challenge = () => {
    const challenge = useLoaderData() as ChallengeListStructure;
    return (
        <div className="challenge container">
            <div className="challenge-header">
                <Link className="go-back" to={'/challenges'}><MdKeyboardArrowLeft />Back to challenges list</Link>
                <div className="title">{challenge.title}</div>
                <Link className="view-raw" to={'raw'}>View full page <MdOpenInFull /></Link>
            </div>
            {
                challenge.technologies &&
                <div className="technologies">
                    <h2>Technologies used for this project</h2>
                    <ul className='technologies-list'>
                        {challenge.technologies.map(technology =>
                            <li className={`technologies-item technologies-${technology.replace(/\s+/g, '-').toLowerCase()}`}>{technology}</li>
                        )}
                    </ul>
                </div>
            }
            <section className="content">
                <div className="top-bar">
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="tab">{challenge.title}</div>
                </div>
                <div className="body">
                    {challenge.element}
                </div>
            </section>
        </div>
    )
}

export default Challenge