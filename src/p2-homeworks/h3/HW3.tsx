import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
    length: number
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let user = {_id: v1(), name: name}
        setUsers([user, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            <h2>homeworks 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

         {/*   <hr/>
            для личного творчества, могу проверить
            <AlternativeGreeting/>
            <hr/>*/}
        </div>
    )
}

export default HW3
