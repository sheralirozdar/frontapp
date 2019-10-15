import React from 'react'
import { Avatar } from 'antd';

const UserImage = (props) => {
    const { image, intial, size } = props.user;
    return(
        <Avatar style={{ backgroundColor: "#e9483a", verticalAlign: 'middle' }} size={size}>
            { image ? <img src={image} /> : intial }
        </Avatar>
    )
}

export default UserImage;