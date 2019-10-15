import React, { Component } from 'react';
import { Card } from 'antd';

class MessageCard extends Component {

    render() {
        const { conversation, cardClass, onClick } = this.props;
        const title = (
            <p> {conversation.From} > {conversation.To}  </p>
        )
        return (
            <Card className={ cardClass } size="small" title={title} extra={conversation.timeAgo} onClick={ onClick }>
                <div className="row">
                    <p>{conversation.subject}</p>
                    <p className="circle-wrap"> {conversation.totalMsg} </p>
                </div>
                <p>{conversation.messagebody}</p>
            </Card>
        )
    }
}

export default MessageCard;