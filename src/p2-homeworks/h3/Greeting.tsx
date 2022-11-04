import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Greeting.module.css';
import b from '../h4/common/c2-SuperButton/SuperButton.module.css';
import i from "../h4/common/c1-SuperInputText/SuperInputText.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""  // need to fix with (?:)


    return (
        <div className={s.content}>
            <input type={"text"} value={name} onChange={setNameCallback} className={inputClass + " " + i.superInput}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addUser} className={s.add + " " + b.button}>Add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}

        </div>
    )
}

export default Greeting
