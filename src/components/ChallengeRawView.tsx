import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ChallengeListStructure, getChallenge } from "../data/challenges/challenges_data"
import './scss/_challenge.scss'

export function loader({ params }: any) {
    const challenge = getChallenge(params.challengeId);
    return challenge
}
const ChallengeRawView = () => {
    const challenge = useLoaderData() as ChallengeListStructure;

    useEffect(() => {
        document.body.classList.add('raw-view');

        return () => {
            document.body.classList.remove('raw-view');
        }
    }, [])

    return challenge.element
}

export default ChallengeRawView