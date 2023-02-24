const Header = ({ course }) => {
  return (
    <h1>
      {course}
    </h1>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(
      (part, i) =>
        <p key={i}>
          {part.name} {part.exercises}
        </p>
    )

  )
}

const Total = (props) => {
  const { parts } = props;
  let total = 0;
  total = parts.map(
    (part) =>
      total + part.exercises
  );
  return (
    <p>
      Number of exercises {total}
    </p>

  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
