import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment)
  const displayIncrement = (props.increment > 99 ? '£'+props.increment / 100 : props.increment+'p')
  return (
    <button className={'coin coin-'+props.increment} onClick={handleClick}>
      <span>{displayIncrement}</span>
    </button>
  )
}

function Balance(props) {
  const displayIncrement = (props.message > 99 ? '£'+(props.message / 100).toFixed(2) : props.message+'p')
  return (
    <h2 className="total">{displayIncrement}</h2>
  )
}

function ClearButton(props) {
  const handleClick = () => props.onClickFunction()
  return (
    <button onClick={handleClick}>Clear X</button>
  )
}

function App() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue)
  const clearCounter = () => setCounter(0)
  return (
    <div className="app">
      <img src={logo} className="logo" alt="logo" />
      <header>
        <h1>Spare Change</h1>
      </header>
      <main>
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={2} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={20} />
        <Button onClickFunction={incrementCounter} increment={50} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Button onClickFunction={incrementCounter} increment={200} />
        <Balance message={counter} />
        <ClearButton onClickFunction={clearCounter} />
      </main>
    </div>
  )
}

export default App
