import {
  Dispatch,
  MouseEventHandler,
  ReactComponentElement,
  SetStateAction,
  useState
} from 'react'
function App() {
  const [count, setCount] = useState(0)
  const increment: MouseEventHandler<HTMLButtonElement> = () =>
    setCount(count + 1)
  const decrement: MouseEventHandler<HTMLButtonElement> = () =>
    setCount(count - 1)
  const value: String = count > 0 ? 'positive' : 'non-positive'
  return (
    <div>
      <p className="text-3xl text-clip text-red-500">
        You clicked {count} times and is {value}
      </p>
      <button
        className="p-3 max-w-sm mx-auto text-gray-700 bg-red-400 rounded-xl shadow-xl w-30 flex items-center space-x-4 hover:bg-sky-700 hover:text-blue-900 active:bg-black active:text-white transition-colors duration-300 ease-in-out"
        onClick={increment}
      >
        Click me
      </button>
      <button onClick={decrement}>Click me</button>
    </div>
  )
}

export default App
