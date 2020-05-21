import React from 'react'
import './SearchBar.css'

const SearchBar = ({searchField, searchChange}) => {
    return (
        <div className='normal-text'>
            <p>Type in the passage reference:</p>
            <input 
                value={searchField}
                type='search' 
                placeholder='e.g.: john 3:17'
                onChange={searchChange}
            />
            <p className="explain">Type the reference to a bible passage. The format
                is <i>[book name] [chapter] : [verse] - [verse]</i>. 
                For example: <i>Acts 1:3-10</i>. You can also use 
                abbreviation of the book name like <i>Rev 5:5-10</i>, 
                where 'Rev' is short for 'Revelation'. To lookup for
                a single verse then you don't have to state the ending verse,
                for example: John 3:16.                
            </p>
        </div>
    )
}

export default SearchBar