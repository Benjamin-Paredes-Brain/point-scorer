import { useState } from "react"


export const PointScorer = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div className="container">

      <h1 className="title">POINT SCORER</h1>

      <div className="container-div">

        <div>
          <div className="name">BENJA :P</div>

          <button className="counter-button" onClick={() => setCount((count) => count + 1)}> + </button>
          <button className="counter-button" onClick={() => setCount((count) => count - 1)}> - </button>

          <div className="counter-number"> {count}</div>

        </div>

        <hr />

        <div>
          <div className="name">SOFF :3 </div>

          <button className="counter-button" onClick={() => setCount2((count) => count + 1)}> + </button>
          <button className="counter-button" onClick={() => setCount2((count) => count - 1)}> - </button>

          <div className="counter-number"> {count2}</div>

        </div>

      </div>













    </div>
  )
}