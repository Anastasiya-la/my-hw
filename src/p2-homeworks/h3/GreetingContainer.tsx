import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: UserType // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name);
            alert(`Hello  ${name}!`)
        } else {
            setError('Name is required')
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
        setError(null)
    }

    const totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
