import React from 'react'
import ReactDOM from 'react-dom'
import LeftSideBar from './components/LeftSideBar'
import Inbox from './components/Inbox'
import RightSideBar from './components/RightSideBar'
import Drawer from './components/drawer/drawer'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  
  render() {
    return (
        <ResizablePanels>
          <LeftSideBar /> 
          <Inbox />
          <RightSideBar />
          {/* <Drawer /> */}
        </ResizablePanels>
    )
  }
}

class ResizablePanels extends React.Component {
  eventHandler = null

  constructor () {
    super()
    
    this.state = {
      isDragging: false,
      panels: [300, 500, 660]
    }
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel)
    ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize)
    ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize)
  }
  
  startResize = (event, index) => {
    this.setState({
      isDragging: true,
      currentPanel: index,
      initialPos: event.clientX
    })
  }
  
  stopResize = () => {
    // if(this.state.panels[1] ){

    // }
    if (this.state.isDragging) {
      this.setState(({panels, currentPanel, delta}) => ({
        isDragging: false,
        panels: {
          ...panels,
          [currentPanel]: (panels[currentPanel] || 0) - delta,
          [currentPanel - 1]: (panels[currentPanel - 1] || 0) + delta
        },
        delta: 0,
        currentPanel: null
      }))
    }
  }
  
  resizePanel = (event) => {
    if (this.state.isDragging) {
      const delta = event.clientX - this.state.initialPos
      this.setState({
        delta: delta
      })
    }
  }
  
  render() {
    const rest = this.props.children.slice(1)
    return (
      <div className="panel-container" onMouseUp={() => this.stopResize()}>
        <div className="panel" style={{background: '#f7f8fa', minWidth : "200px"  ,width: `calc(100% - ${this.state.panels[1]}px - ${this.state.panels[2]}px)`}}>
          {this.props.children[0]}
        </div>
        {[].concat(...rest.map((child, i) => {
          let color = "";
          i == 0 ? color = '#ffffff' : color = '#f7f8fa';
          let minmiumWidth = "";
          i == 1 ? minmiumWidth = "350px" : minmiumWidth = "";
          return [
            <div onMouseDown={(e) => this.startResize(e, i + 1)}
              key={"resizer_" + i}
              style={this.state.currentPanel === i+1 ? {left: this.state.delta} : {}}
              className="resizer"></div>,
            <div key={"panel_" + i} className="panel" style={{background: color, minWidth : minmiumWidth, width: this.state.panels[i + 1]}}>
              {child}
            </div>
            
          ]
        }))}
      </div>
    )
  }
}

