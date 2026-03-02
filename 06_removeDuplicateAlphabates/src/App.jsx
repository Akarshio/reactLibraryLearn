
import './App.css'

import React, { useState } from 'react';

 function AlphabetCleaner() {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    const handleRemoveDuplicates = () => {

        const charArray =  [...userInput]
        const uniqueArray = [...new Set(charArray)];


        setResult(uniqueArray.join(""));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h3>Alphabet Duplicate Remover</h3>

            <div>
                <label>Input Text (A-Z, a-z):</label><br />
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter alphabets..."
                />
            </div>

            <br />

            <button onClick={handleRemoveDuplicates}>
                Remove Duplicate Alphabets
            </button>

            <br /><br />

            <div>
                <label>Result (Unique):</label><br />
                <input
                    type="text"
                    value={result}
                    readOnly
                    placeholder="Cleaned text will appear here"
                />
            </div>
        </div>
    );
}


export default AlphabetCleaner
