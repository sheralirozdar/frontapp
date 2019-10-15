import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Nav from './Nav'


class ListView extends Component {    
    render(){
        return(
            <div className="Conversation-list" >
                <SearchBar />
                <Nav /> 
            </div>
        )
    }

}

export default ListView;