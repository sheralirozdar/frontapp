import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import UserImage from '../Avatar.js'

export default class Autoset extends Component {

    state = {
        user: {
            name: "Ramaeez Raja",
            userName: "@rameezraja",
            intial: "R",
            image: null
        }
    }

    handleButtonClick = (e) => {
        console.log("button")
    }

    handleMenuClick = () => {
        console.log("menu")
    }

    render() {
        const { name, userName } = this.state.user
        const ProfileMenu = (
            <Menu >
                <div className="user-info">
                    <UserImage user={this.state.user} size="small" />
                    <div classnName="User-name">
                        <h5>{name}</h5>
                        <p>{userName}</p>
                    </div>

                </div>
                <Menu.Divider />
                <Menu.Item key="1">
                    <Icon type="user" />
                    Settings
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="user" />
                    Help
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    Talk to us
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="user" />
                    Recommend Front
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="user" />
                    What's new
                </Menu.Item>
                <Menu.Item key="6">
                    <Icon type="user" />
                    Sign out
                </Menu.Item>
            </Menu>
        );

        const NewMessagemMenu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    <i className="fas fa-pen"></i>
                    New Message
                </Menu.Item>
                <Menu.Item key="2">
                    <i className="fas fa-comment-dots"></i>
                    New Discussion
                </Menu.Item>
            </Menu>
        );
        return (
            <React.Fragment>
                <div className="header-profile-dropdown">
                    <Dropdown overlay={ProfileMenu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                            <UserImage user={this.state.user} size="large" />
                        </a>
                    </Dropdown>
                </div>
                <div className="new-message-dropdown">
                    <Dropdown.Button onClick={this.handleButtonClick} overlay={NewMessagemMenu}>
                        <i className="fas fa-pen"></i>
                    </Dropdown.Button>
                </div>
            </React.Fragment>
        );
    }
}