import React from 'react'
import { Row, Col, Button, Radio, Icon } from 'antd';
import { Card, Menu, Dropdown } from 'antd';
import Avatar from '../Avatar'

const menu = (
    <Menu>
        <Menu.Item key="0">
            <span>
                Reply
            </span>
        </Menu.Item>
        <Menu.Item key="1">
            <span>
                Reply all
            </span>
        </Menu.Item>
        <Menu.Item key="2">
            <span>
                Forward
            </span>
        </Menu.Item>
        <Menu.Item key="3">
            <span>
                Forward as a new conversation
            </span>
        </Menu.Item>
        <Menu.Item key="4">
            <span>
                Resend
            </span>
        </Menu.Item>
        <Menu.Item key="5">
            <span>
                Resend as a conversation
            </span>
        </Menu.Item>
        <Menu.Item key="6" disable>
            <span>
                Move to a new conversation
            </span>
        </Menu.Item>
        <Menu.Item key="7">
            <span>
                Delete permanently
            </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="8">
            <span>
                Print
            </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="9">
            <span>
                Copy message ID
            </span>
        </Menu.Item>
        <Menu.Item key="10">
            <span>
                Copy message permalink
            </span>
        </Menu.Item>
        <Menu.Item key="11">
            <span>
                View Source
            </span>
        </Menu.Item>
        <Menu.Item key="12">
            <span>
                View in external window
            </span>
        </Menu.Item>
    </Menu>
);


const MessageCard = (props) => {


    const header = (
        <div className="message-card-head">
            <div className="message-card-userinfo">
                <Avatar user={{ image: null, intial: "R", size: "large" }} />
                <div>
                    <h4>{"Rashid"}</h4>
                    <p>{"To : " + "Ahmad"}</p>
                </div>
            </div >
            <div className="message-card-msginfo">
                <p>{"3 days"}</p>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
                    <div className="ant-dropdown-link" >
                        <div className="icon">
                            <i className="fas fa-ellipsis-v"></i>
                        </div> 
                    </div>
                </Dropdown>
            </div >
        </div>
    )
    return (
        <div className="message-card" >
            <Card size="small" title={header} style={{ width: "100%" }}>
                <div className="message-card-body">
                    <p>{"Hi I’m so glad you decided to try Front! We’ve worked hard to build a better way for teams to communicate and collaborate, and I’m excited for you to get started.Learning how to use Front is fast and easy. We’ve kept the look and feel of the inbox you’re used to, while adding powerful features and automations to help your team work together more efficiently.We’ve set up this demo inbox to help you learn how Front works. You have a couple other messages waiting for you — they'll show you around.Enjoy Mathilde CEO | Front"}</p>
                    <Button type="primary" shape="round" size={"medium"}>
                        <i className="fas fa-reply"></i>   Reply
                    </Button>
                </div>
            </Card>
        </div>
    )
}
// extra={<a href="#">More</a>}
export default MessageCard;