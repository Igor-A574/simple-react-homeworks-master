import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import loadImage from '../../common/loading.png'
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    let isLoading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)
    let dispatch = useDispatch()


    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 5000)
        console.log('loading...')
    };


    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img className={s.img} src={loadImage} alt="loadImage" /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
