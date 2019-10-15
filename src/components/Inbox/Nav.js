import React from 'react'
import { Tabs } from 'antd';
import MessageCard from './MessageCard'

const { TabPane } = Tabs;

class Filter extends React.Component {

  state = {
    conversations: [
      {
        From: "Josue Vital",
        To: "Ahmad",
        subject: "Re: Productivity x 10!",
        messagebody: "Hi how can i help you? -- Josue Vitall Account Executive 650-618-3214-413243-3241324-324123-",
        timeAgo: "1D",
        totalMsg: 3
      },
      {
        From: "Josue Vital",
        To: "Rameez Raja",
        subject: "Re: Split Task!",
        messagebody: "Hi how can i help you? -- Josue Vitall Account Executive 650-618-3214-413243-3241324-324123-",
        timeAgo: "1D",
        totalMsg: 5
      }
    ],
    active: ""
  }

  OnCardClick = (id) => {
    this.setState({ active : id })
  }

  render() {
    const { conversations,active } = this.state;
    return (
      <Tabs >
        <TabPane tab="Open" key="1">
          <div className="conversation-list">
            {
              conversations.map((conversation, key) => (
                <MessageCard cardClass={ active == key ? 'active' : "" } conversation={conversation} onClick={ () => this.OnCardClick(key)} />
              ))
            }

          </div>
        </TabPane>
        <TabPane tab="Archived" key="2">
        <div className="conversation-list">
            {
              conversations.map((conversation, key) => (
                <MessageCard cardClass={ active == key ? 'active' : "" } conversation={conversation} onClick={ () => this.OnCardClick(key)} />
              ))
            }

          </div>
        </TabPane>
        <TabPane tab="Snoozed" key="3">
        <div className="conversation-list">
            {
              conversations.map((conversation, key) => (
                <MessageCard cardClass={ active == key ? 'active' : "" } conversation={conversation} onClick={ () => this.OnCardClick(key)} />
              ))
            }

          </div>
        </TabPane>
        <TabPane tab="Trash" key="4">
        <div className="conversation-list">
            {
              conversations.map((conversation, key) => (
                <MessageCard cardClass={ active == key ? 'active' : "" } conversation={conversation} onClick={ () => this.OnCardClick(key)} />
              ))
            }

          </div>
        </TabPane>
        <TabPane tab="Spam" key="5">
        <div className="conversation-list">
            {
              conversations.map((conversation, key) => (
                <MessageCard cardClass={ active == key ? 'active' : "" } conversation={conversation} onClick={ () => this.OnCardClick(key)} />
              ))
            }

          </div>
        </TabPane>
      </Tabs>
    );
  }
}

export default Filter;