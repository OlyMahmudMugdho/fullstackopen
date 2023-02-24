import { useState } from "react";

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const getRandom = () => {
    let max = anecdotes.length - 1;
    return Math.floor(Math.random() * max);
  }

  const makeArrayOfZero = (arr, length) => {
    for (let i = 0; i < length; i++) {
      arr[i] = 0;
    }

    return arr;
  }

  const arrayOfZeros = makeArrayOfZero([], anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(arrayOfZeros);

  const vote = () => {
    const newVote = { ...votes };
    newVote[selected] += 1;
    setVote(newVote);
  }

  const getNext = () => {
    setSelected(getRandom());
  }

  const maxNumber = Math.max(...Object.values(votes));
  const index = Object.keys(votes).findIndex(
    (key) =>
      votes[key] === maxNumber
  )
  console.log(maxNumber);
  console.log(index);



  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <Button
        onClick={vote}
        name="vote"
      />
      <Button
        onClick={getNext}
        name="next anecdote"
      />
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[index]} <br />
        has {maxNumber} votes
      </div>
    </div>
  );
}

export default App;
