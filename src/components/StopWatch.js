import React, { useCallback, useEffect, useState } from 'react';

export default function StopWatch({ showLapButton, onLap }) {
    let [running, setRunning] = useState(false);
    let [timer, setTimer] = useState(0);

    let updateTimer = useCallback(() => {
        if (running) {
            setTimer((timer) => timer + 10);
        }
    }, [running]);

    useEffect(() => {
        let currentTimer = setInterval(updateTimer, 10);
        return () => clearInterval(currentTimer);
    }, [updateTimer]);

    let startStop = () => {
        setRunning(!running);
    };

    let reset = () => {
        setTimer(0);
    };

    let lap = () => {
        if (onLap) {
            onLap(timer);
        }
    };

    let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, "0");
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0");
    let mills = (timer % 1000).toString().padStart(3, "0");

    return (
        <div>
            <p>{mins}:{secs}.{mills}</p>
            <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
            <button onClick={reset}>Reset</button>
            {showLapButton && <button onClick={lap}>Lap</button>}
        </div>
    );
}
