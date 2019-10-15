import React from 'react'
import Avatar from '../Avatar'
import { Tag } from 'antd'

const Comment = () => {
    return (
        <div className="comment-card">
            <div className="col">
                <Avatar user={{ image: null, intial: "R", size: "small" }} />
            </div>
            <div className="col">
                <Tag > This is a Comment </Tag>
            </div>
            <div className="col">
                <span className="pd-1">Edit</span>
                <span >Delete</span>
            </div>
        </div>

    )
}

export default Comment