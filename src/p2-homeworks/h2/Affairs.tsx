import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))



    // const setAll = () => props.setFilter('all')
    // const setHigh = () => props.setFilter('high')
    // const setMiddle = () => props.setFilter('middle')
    // const setLow = () => props.setFilter('low')
    const setFilterHandler= (filter: FilterType) => {
        props.setFilter(filter)
    }
    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>setFilterHandler('all')}>all</button>
            <button onClick={()=>setFilterHandler('high')}>high</button>
            <button onClick={()=>setFilterHandler('middle')}>middle</button>
            <button onClick={()=>setFilterHandler('low')}>low</button>
        </div>
    )
}

export default Affairs
