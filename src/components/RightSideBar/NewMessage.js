import React, { Component } from 'react'
import { Row, Col, Button, Radio, Icon } from 'antd';
import { Card, Menu, Dropdown } from 'antd';
import Avatar from '../Avatar'
import { Tag } from 'antd';
import { Input } from 'antd';


class MessageCard extends Component {

    state = {
        email: null,
        ToTags: [],
        CcTags: [],
        BccTags: [],
        Inputs: []
    }

    componentDidMount = () => {
        this.AddInput("To")
    }

    onAddEmail = (e) => {
        const value = e.target.value;
        this.setState({ email: value })
    }

    onSubmit = (type) => {
        const email = this.state.email;
        type == "To" ? this.setState({ ToTags : this.state.ToTags.concat(<Tag closable >{type + " : " + email}</Tag>) }) :
        type == "Cc" ? this.setState({ CcTags : this.state.CcTags.concat(<Tag closable >{type + " : " + email}</Tag>) }) :
        this.setState({ BccTags : this.state.BccTags.push(<Tag closable >{type + " : " + email}</Tag>) })
    }

    AddInput = (type) => {
        let Tags = [];
        const { ToTags, CcTags, BccTags, Inputs } = this.state;
        type == "To" ? Tags = ToTags : type == "Cc" ? Tags = CcTags : Tags = BccTags
        const input = this.state.Inputs.concat(<Row>
            <Col span={11}>
                {Tags.map((tag) => (
                    tag
                ))}
            </Col>
            <Col span={4}>
                <Input onChange={this.onAddEmail}
                    onBlur={() => this.onSubmit(type)} placeholder="add email here" />
            </Col>
        </Row>);
        this.setState({ Inputs : input })
    }

    header = () => {
        const { Inputs } = this.state;
        console.log(Inputs)
        return (
            <Row gutter={16}>
                <Col span={15} >
                    <Row>
                        <Col >
                            <Tag>{" From : Rameez Raja "}</Tag>
                        </Col>
                    </Row>
                    {
                        Inputs.map((Input)=>{
                            // console.log(Input)
                            return Input
                        })
                    }
                </Col >
                <Col span={9} >
                    <Button size={"small"} onClick={() => { this.AddInput("Cc") }}>Cc</Button>
                    <Button size={"small"} onClick={() => { this.AddInput("Bcc") }}>Bcc</Button>
                    <Button size={"small"} onClick={() => { this.AddInput("Subject") }}>Subject</Button>
                    <Button size={"small"}  >popout</Button>
                </Col >
            </Row>
        )
    }
    render() {
        console.log("Re render")
        return (
            <div className="message-card" style={{ margin: "1rem" }}>
                <Card size="small" title={this.header()} style={{ width: "100%" }}>
                    <p>{"Hi I’m so glad you decided to try Front! We’ve worked hard to build a better way for teams to communicate and collaborate, and I’m excited for you to get started.Learning how to use Front is fast and easy. We’ve kept the look and feel of the inbox you’re used to, while adding powerful features and automations to help your team work together more efficiently.We’ve set up this demo inbox to help you learn how Front works. You have a couple other messages waiting for you — they'll show you around.Enjoy Mathilde CEO | Front"}</p>
                </Card>
            </div>
        )
    }
}

export default MessageCard;