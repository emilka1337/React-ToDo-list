import { useState, useContext } from "react";
import { TodosContext } from "../App"

class Card {
    todoList = []

    constructor(name, color) {
        this.name = name
        this.color = color
    }
}

export default function Form(props) {
    const [newCardName, setNewCardName] = useState("");
    const [newCardColor, setNewCardColor] = useState("#343434");

    const [todoCards, setAndSaveTodoCards] = useContext(TodosContext)

    function onCardNameChange(e) {
        setNewCardName(e.target.value)
    }

    function onCardColorChange(e) {
        setNewCardColor(e.target.value)
    }

    function onFormSubmit(e) {
        e.preventDefault()
        setAndSaveTodoCards([...todoCards, new Card(newCardName, newCardColor)])
        setNewCardName("")
        setNewCardColor("#343434")
        props.onSubmit()
    }

    function onFormCancel() {
        props.onSubmit();
    }

    return (
        <form className="new-todo-card-form" onSubmit={onFormSubmit}>
            <label htmlFor="new-todo-card-name">Name:</label>
            <input type="text" id="new-todo-card-name" value={newCardName} onChange={onCardNameChange} />
            <label htmlFor="new-todo-card-color">Color:</label>
            <input type="color" id="new-todo-card-color" value={newCardColor} onChange={onCardColorChange} />
            <button className="btn">
                <p>Create new card</p>
                <svg viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
            </button>
            <button className="btn" onClick={onFormCancel}>Cancel</button>
        </form>
    )
}