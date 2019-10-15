import React from 'react'

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class Myinbox extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    settings = e => {
        console.log("settings");
    }

    render() {
        return (
            <div id="main-inbox">
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
                                    <span>Me</span>
                                    <span onClick={this.settings} > <i className="fas fa-cog menu-icon"></i> </span>
                                </span>
                        }
                        className="menu-maintitle"
                    >
                        <SubMenu key="sub2" title={
                            <span className="menu-title">
                                <i className="fas fa-inbox menu-icon"></i>
                                <span>Inbox</span>
                            </span>
                        }
                            className="menu-submenutitle"
                        >
                            <Menu.Item key="1">
                                <span className="menu-title">
                                    <i className="fas fa-inbox menu-icon"></i>
                                    <span >Assigened to Me</span>
                                </span></Menu.Item>
                            <Menu.Item key="2">
                                <span className="menu-title">
                                    <i className="fas fa-inbox menu-icon"></i>
                                    <span >Shared with me</span>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span className="menu-title">
                                    <i className="fas fa-comment menu-icon"></i>
                                    <span >Discussion</span>
                                </span></Menu.Item>
                            <Menu.Item key="4"><span className="menu-title">
                                <i className="fas fa-plus-circle menu-icon"></i>
                                <span >Add individual inbox</span>
                            </span></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5"
                            className="manin-menuitem">
                            <span className="menu-title">
                                <i className="fas fa-sticky-note menu-icon"></i>
                                <span>Draft</span>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="6"><span className="menu-title">
                            <i className="fas fa-paper-plane menu-icon"></i>
                            <span>Sent</span>
                        </span>

                        </Menu.Item>

                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Myinbox;