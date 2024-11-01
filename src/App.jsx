import { useState } from 'react'
import PropTypes from 'prop-types';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0
  const positive = all ? (100 * good) / all : 0

  const Button = ({ onClick, value }) => {
    return (
      <button onClick={onClick}>{value}</button>
    )
  }

  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    )
  }



  const Statistics = () => {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }

  //proptypes de componentes con props
  StatisticLine.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
  };

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={() => setGood(good + 1)} value="good" />
      <Button onClick={() => setNeutral(neutral + 1)} value="neutral" />
      <Button onClick={() => setBad(bad + 1)} value="bad" />

      {
        all === 0 ?
          <p>No Feedback</p> :
          <>
            <Statistics all={all} average={average} positive={positive} />
          </>
      }
    </div>
  )
}

export default App
