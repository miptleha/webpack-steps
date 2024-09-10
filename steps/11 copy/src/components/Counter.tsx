import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="mb-1">
            <button className="mr-1" onClick={() => setCounter(counter - 1)}>-</button>
            <input className="mr-1" value={counter} onChange={e => setCounter(parseInt(e.target.value, 10))} />
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}