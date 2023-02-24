import { useState } from "react";

const Title = (props) => {
  return (
    <h1>
      {props.title}
    </h1>
  )
}

const Statistics = (props) => {

  return (
    (
      <table>
        <tbody>
          <tr>
            <td style={
              {
                minWidth: "3rem"
              }
            }>
              {props.text}
            </td>
            <td
              style={
                {
                  minWidth: "3rem"
                }
              }
            >
              {props.value}{(props.unit) ? props.unit : ""}
            </td>
          </tr>
        </tbody>
      </table>
    )
  )

}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.buttonName}
    </button>
  )
}

function App() {
  let [good, setGood] = useState(0);
  let [bad, setBad] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [feedbackCount, setFeedbackCount] = useState(0);
  let [score, setScore] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    setFeedbackCount(feedbackCount + 1);
    setScore(score + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setFeedbackCount(feedbackCount + 1);
    setScore(score - 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setFeedbackCount(feedbackCount + 1);
    setScore(score + 0);
  };

  return (
    <div>
      <Title
        title="give feedback"
      />

      <Button
        onClick={increaseGood}
        buttonName={"Good"}
      />

      <Button
        onClick={increaseBad}
        buttonName={"Bad"}
      />

      <Button
        onClick={increaseNeutral}
        buttonName={"Neutral"}
      />

      <Title
        title="statistics"
      />

      {
        (feedbackCount > 0)
          ? <>
            <Statistics
              text={"good"}
              value={good}
            />

            <Statistics
              text={"neutral"}
              value={neutral}
            />

            <Statistics
              text={"bad"}
              value={bad}
            />

            <Statistics
              text={"all"}
              value={feedbackCount}
            />

            <Statistics
              text={"average"}
              value={((score / feedbackCount)).toPrecision(1)}
            />

            <Statistics
              text={"positive"}
              value={((good / feedbackCount) * 100).toPrecision(3)}
              unit="%"
            />
          </>
          :
          <p>
            No feedback given
          </p>
      }
    </div>
  );
}

export default App;
