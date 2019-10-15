import React from 'react'
import Tooltip from "./ToolTipTag"
import HeadAction from "./head-actions"

const Header = () => {
        return (
            <div className="head" >
                <div className="actions">
                    <HeadAction />
                    <div className="tags">
                        {/* <Tooltip />   */}
                    </div>
                </div>
                <div className="regarding">
                    <h4> RE : Productivity x 10 </h4>
                    <span>
                        <i className="fas fa-inbox"></i>
                        Inbox
                        {/* <i className="fas fa-lock sm"></i> */}
                    </span>
                </div>     
            </div>
        )
}

export default Header;