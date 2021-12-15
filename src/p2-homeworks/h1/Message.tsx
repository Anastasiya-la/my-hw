import React from 'react'
import m from './Message.module.css';
type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className ={m.message}>
          <img src = {props.avatar} alt ={'avatar'} className={m.message_img}/>
            <div className={m.message_angle}></div>
            <div className = {m.message_content}>
                <div className = {m.message_name}>{props.name}</div>
                <div className = {m.message_text}>{props.message}</div>
                <div className = {m.message_time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
