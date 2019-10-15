import React from 'react'
import MyInbox from './myinbox'
import TeamInbox from './teamInbox'
import AssignedConversation from './assignedConversations';

class Nav extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <div>
                <MyInbox />
                <TeamInbox />
                <AssignedConversation />
            </div>
        );
    }
}

export default Nav;