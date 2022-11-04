import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import b from "../h4/common/c2-SuperButton/SuperButton.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const finalClassName = `${s.btn} ${b.button}`;
    return (
        <div>
            <div>
                <span>{props.affair.name}</span>
                <button className= {finalClassName} onClick={deleteCallback}>X</button>
            </div>


        </div>
    )
}

export default Affair
