import React from 'react';
import { Input, Row, Col } from 'antd';

const { Search } = Input;

const SearchBar = () => {

    return (
        <div className="row">
            <div className="search-col">
                <Search
                    placeholder="Search..."
                    onSearch={
                        value => console.log(value)
                    }
                />
            </div>
            <div className="sortby-col">
                <i class="fas fa-sort-amount-up"></i>
            </div>
        </div>
    )
}

export default SearchBar;