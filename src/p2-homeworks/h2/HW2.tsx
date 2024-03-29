import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all'){
        return affairs
    } else {
        return affairs.filter(a => a.priority === filter)
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number):  Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
           <h2>homeworks 2</h2>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        {/*    <hr/>
            для личного творчества, могу проверить
            <AlternativeAffairs/>
            <hr/>*/}
        </div>
    )
}

export default HW2
