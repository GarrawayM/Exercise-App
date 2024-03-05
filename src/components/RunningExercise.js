import React, { useState } from 'react';
import StopWatch from './StopWatch';

export default function RunningExercise({ setMenuScreen }) {
    const [laps, setLaps] = useState([]);

    const recordLap = (lapTime) => {
        const formattedTime = formatTime(lapTime);
        setLaps([...laps, formattedTime]);
    };

    const formatTime = (time) => {
        const mins = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
        const secs = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
        const mills = (time % 1000).toString().padStart(3, "0");
        return `${mins}:${secs}.${mills}`;
    };

    return (
        <div>
            <h1>Running</h1>
            <StopWatch onLap={recordLap} showLapButton={true} />
            {laps.length > 0 && (
                <div>
                    <h2>Lap Times:</h2>
                    <ul>
                        {laps.map((lap, index) => (
                            <li key={index}>{lap}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={setMenuScreen}>Back to Menu</button>
        </div>
    );
}
