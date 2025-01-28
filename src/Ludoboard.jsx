import React, {useState} from 'react';
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});

    const updateColor = (color) => {
        setMoves(prevMoves => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));
    };

    return(
    <div>
        <p>game begins</p>
        <div className="board">
            <p>Blue move = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={() => updateColor('blue')}>+1</button>

            <p>Green move = {moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={() => updateColor('green')}>+1</button>

            <p>Yellow move = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={() => updateColor('yellow')}>+1</button>

            <p>Red move = {moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={() => updateColor('red')}>+1</button>
        </div>
    </div>
    );
}