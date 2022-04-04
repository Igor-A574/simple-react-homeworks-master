import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={s.affair}>
            <span className={s.item}>{props.affair.name}</span>
            <span className={s.item}>{props.affair.priority}</span>
            <button onClick={deleteCallback} className={s.button}>X</button>
        </div>
    )
}

export default Affair
