import React from 'react'

const HtmlFrame = (props) => (
    <div dangerouslySetInnerHTML={{
        __html: props.content
      }}></div>
)

export default HtmlFrame