import React from "react"
import { Input, Tooltip } from 'antd';
import Avatar from "../Avatar"

const AddComment = () => {
    return (
        <div className="add-comment">
            <Avatar user={{ image: null, intial: "R", size: "medium" }} />
            <Input
                placeholder="Type your comment..."
                suffix={
                    <Tooltip title="Extra information">
                        <i className="fas fa-paperclip"></i>
                        <i className="far fa-smile"></i>
                        <i className="fas fa-arrow-up"></i>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default AddComment;
