import { ChallengeList } from "../components/ChallengeList"

const Challenges = () => {
  return (
    <div className="challenges container">
      <h1>Challenges</h1>
      <p>Here you can see all challenges I've completed in the past</p>
      <br />
      <ChallengeList />
    </div>
  )
}

export default Challenges