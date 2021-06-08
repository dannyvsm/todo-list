import React, { useState } from "react"

const Form = ({ handleForm}) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={(e) => handleSubmit(e, userInput)}>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;