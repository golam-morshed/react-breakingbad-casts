import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [ text, setText ] = useState('');
    const onSearch = (queryText) => {
        setText(queryText);
        getQuery(queryText);
    }

    return (
        <section className="search">
            <form action="">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Characters"
                    value={text}
                    onChange={(e) => onSearch(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
