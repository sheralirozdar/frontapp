import React, { Component } from 'react'
import Head from './Head'
import Conversation from './Conversation'
import AddComment from './AddComment'

class RightSideBar extends Component {
    render() {
        return (
            <div className="Right-side-bar" >
                <Head />
                <Conversation />
                <AddComment />
            </div>
        )
    }
}

export default RightSideBar;