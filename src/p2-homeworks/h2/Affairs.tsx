import React from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import s from './Affairs.module.css';
import b from '../h4/common/c2-SuperButton/SuperButton.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const finalClassName = `${s.btn} ${b.button}`;

    return (
        <div className={s.content}>

            {mappedAffairs}

            <button className={finalClassName} onClick={setAll}>All</button>
            <button className={finalClassName} onClick={setHigh}>High</button>
            <button className={finalClassName} onClick={setMiddle}>Middle</button>
            <button className={finalClassName} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
