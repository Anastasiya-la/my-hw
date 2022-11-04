import React from 'react'
import s from './Error404.module.css'
import errorImg from './error.png';


function Error404() {
    return (
        <div className={s.error_page}>
            <div className={s.error_img}><img src={errorImg} alt="404"/></div>
        </div>
    )
}

export default Error404
