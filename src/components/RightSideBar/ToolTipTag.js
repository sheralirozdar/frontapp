import React from 'react'
import { Tag, Button } from 'antd';
import Avatar from "../Avatar"

export default class Demo extends React.Component {
  state = {
    user: {
        name: "Ramaeez Raja",
        userName : "@rameezraja",
        intial: "R",
        image: null
    },
    visible: false
}

  render() {
    return (
      <div className="tag">
        <Button size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          <div className="row">
            <Avatar user = { this.state.user } size={15} />
            <p>{ this.state.user.name }</p>
          </div>
        </Button>
        {/* <br />
        <Tag
          closable
          visible={ this.state.visible }
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag> */}
      </div>
    );
  }
}
