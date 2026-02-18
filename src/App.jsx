import { useState } from 'react'
import './App.css'

function App() {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)

  function preset(){
    setR(0)
    setG(0)
    setB(0)
  }
  return (
    <>
    <div className='container'>
    <h1 style={{color:"red"}}>React Mini Project - Color Mixer</h1>
      <div className='content'>
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'rgb('+r+','+g+','+b+')',
        }}>
      </div>

      <div className='range'>
        <label htmlFor="">Red</label>
        <input type="range" min={0} max={255} value={r} onChange={(event)=>setR(event.target.value)} />
        <br /><br />
        <label htmlFor="">Green</label>
        <input type="range" min={0} max={255} value={g} onChange={(event)=>setG(event.target.value)} />
        <br /><br />
        <label htmlFor="">Blue</label>
        <input type="range" min={0} max={255} value={b} onChange={(event)=>setB(event.target.value)} />
        <br /><br />
        <button onClick={preset}>Preset</button>
      </div>
    </div >
    </div>
    </>
  )
}

export default App
