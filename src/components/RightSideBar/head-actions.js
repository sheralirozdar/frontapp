import React from 'react';
import { Menu, Dropdown, Row, Col } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <span>
                Move to...
            </span>
        </Menu.Item>
        <Menu.Item key="1">
            <span>
                Print...
            </span>
        </Menu.Item>
        <Menu.Item key="2">
            <span>
                Mark as read
            </span>
        </Menu.Item>
        <Menu.Item key="3">
            <span>
                Create quick rule
            </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
            <span>
                Mark as spam
            </span>
        </Menu.Item>
        <Menu.Item key="5">
            <span>
                Report phishing
            </span>
        </Menu.Item>
        <Menu.Item key="6">
            <span>
                Block sender
            </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7">
            <span>
                Copy conversation ID
            </span>
        </Menu.Item>
        <Menu.Item key="8">
            <span>
                Copy conversation link
            </span>
        </Menu.Item>
        <Menu.Item key="9">
            <span>
                View conversation details
            </span>
        </Menu.Item>
        <Menu.Item key="9">
            <span>
                View in external window
            </span>
        </Menu.Item>
    </Menu>
);

const Actions = () => {

    return (
        <div className="head-actions">
            <div className="icon">
                <i class="fas fa-archive"></i>
            </div>
            <div className="icon">
                <i class="far fa-clock"></i>
            </div>
            <div className="icon">
                <i class="fas fa-trash"></i>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="ant-dropdown-link" >
                    <div className="icon">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}

export default Actions;