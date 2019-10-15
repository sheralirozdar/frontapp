import React, { Component } from 'react';
import { Button } from 'antd'

class Footer extends Component{

    render(){
        return(
            <div className="footer-row">
                <Button type="normal" shape="circle" icon="inbox" size={"medium"} />
                <Button type="primary" shape="circle" icon="bar-chart" size={"medium"} />
                <Button type="normal" shape="circle" icon="contacts" size={"medium"} />
                <Button type="normal" shape="circle" icon="stack" size={"medium"} />
            </div>
        )
    }
}

export default Footer;