import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Greeting.module.css'

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
        <div>
            <input type={"text"} value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <button onClick={addUser} className={s.add}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}

        </div>
    )
}

export default Greeting
