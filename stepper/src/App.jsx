import './App.css'

import { Stepper } from './components/Stepper'
import { useState } from 'react'

function App() {
  const [step, setStep] = useState(0)
  const steps = ["Step 1", "Step 2", "Step 3"];
  return (
    <div style={{ width: "50%", margin: "0 auto"}}>
      <Stepper steps={steps} currentStep={step} />
      <div>
        <button disabled={step === 0} className="" onClick={() => setStep(step - 1)}>Previous</button>
        <button disabled={step === steps.length - 1} onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </div>
  )
}

export default App
