import React from 'react'
import './VerseViewer.css'

const VerseViewer = ({query, verses}) => {    
    return query && query.book && query.chapter && verses && verses.length>0 ? (
        <div className='bible-text'>            
            <h1 className='f2'>{query ? `${query.book} ${query.chapter}` : ''}</h1>
            <ol start={verses[0].verse}>
            {
                verses.map(v => (
                    <li key={v.verse}>{v.text}</li>
                ))
            }
            </ol>
        </div>
    ) : <div className='bible-text'>&nbsp;</div>
}

export default VerseViewer;