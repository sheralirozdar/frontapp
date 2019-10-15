import React, { Component } from 'react'
import Message from './MessageCard'
import Comment from './CommentCard'
import NewMessage from './NewMessage'

const Conversation = () => {
    return (
        <div className="container">
            <div className="left-col"></div>
            <div className="center-col">
                <ul>
                    <Message />
                    <Comment />
                    {/* <NewMessage /> */}
                </ul>
            </div>
            <div className="right-col"> 
            </div>
        </div>
    )
}

export default Conversation;