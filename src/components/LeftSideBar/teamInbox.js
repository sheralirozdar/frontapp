import React, { Component } from 'react'
import { Menu } from 'antd'
const { SubMenu } = Menu;

class TeamInboxs extends Component {

    state = {
        inbox: [
            {
                name: "Demo Inbox",
                color: "red",
                conversations: [

                ]
            },
            {
                name: "sprysol Inbox",
                color: "green",
                conversations: [

                ]
            }
        ]
    }

    settings = e => {

        console.log("fhuasdfyf");
    }

    render() {
        const { inbox } = this.state;
        return (
            <div id="team-inbox">
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span className="sub-menu-title">
                                <span>xyz</span>
                                <span onClick={this.settings} > <i className="fas fa-cog menu-icon"></i> </span>
                            </span>
                        }
                        className="menu-maintitle"
                    >

                        {
                            inbox.map((item, i) => (
                                <Menu.Item key={i}>
                                    <span className="menu-title">
                                        <i className="fas fa-circle menu-icon" style={{ color : item.color}}></i>
                                        <span >{item.name}</span>
                                    </span>
                                </Menu.Item>
                            ))
                        }

                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default TeamInboxs