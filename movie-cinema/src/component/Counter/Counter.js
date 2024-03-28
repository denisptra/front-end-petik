import React, { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const handleTambah = () => {
        setNumber(number + 1);
    };
    const handleKurang = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <p>Nilai Saat ini : {number} </p>
            <button onClick={handleTambah}>+</button>
            <button onClick={handleKurang}>-</button>
        </div>
    )
}

export default Counter;