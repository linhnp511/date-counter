import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");

  date.setDate(date.getDate() + count);

  function handlePreviousStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step > 0) setStep((s) => s + 1);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step} </span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

// function Step() {
//   return (
//     <div>
//       <Button btn="-" />
//       <span>Step: {}</span>
//       <Button btn="+" />
//     </div>
//   );
// }
