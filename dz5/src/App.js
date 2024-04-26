import React, { useState } from 'react';
import InputName from "./components/InputName";
import NameList from "./components/NameList";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [names, setNames] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };

    const handleChangeName = (index, newName) => {
        if (newName.trim() !== '') {
            const updatedNames = [...names];
            updatedNames[index] = newName;
            setNames(updatedNames);
        }
    };

    const handleDeleteName = (nameToDelete) => {
        const updatedNames = names.filter((name) => name !== nameToDelete);
        setNames(updatedNames);
    };

    return (
        <div>
            <InputName
                value={inputValue}
                onChange={handleInputChange}
                onAdd={handleAddName}
                disabled={!inputValue.trim()}
            />
            <NameList
                names={names}
                onNameChange={handleChangeName}
                onNameDelete={handleDeleteName}
            />
        </div>
    );
}

export default App;
