import React, { Component } from 'react'
import { Menu } from 'antd'
const { SubMenu } = Menu;

class AssignedConversation extends Component {

    state = {
        inbox: [
            {
                name: "Team Development",
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
            <div id="assigned-conversations">
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
                                <span>Assigned Conversations</span>
                                <span onClick={this.settings} > <i className="fas fa-cog menu-icon"></i> </span>
                            </span>
                        }
                        className="menu-maintitle"
                    >

                        <Menu.Item key="0">
                            <span className="menu-title">
                                <i className="fas fa-user-friends menu-icon"></i>
                                <span >{"All teammates"}</span>
                            </span>
                        </Menu.Item>

                        {
                            inbox.map((item, i) => (
                                <Menu.Item key={i}>
                                    <span className="menu-title">
                                        <i className="fas fa-inbox menu-icon"></i>
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

export default AssignedConversation