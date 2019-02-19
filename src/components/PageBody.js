import React from 'react'

require('prismjs/themes/prism.css')

const PageBody = props => {
  return (
    <div>
      <hr />
      <p
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default PageBody
