import React from 'react'
import TagList from '../components/TagList'
import PostDate from '../components/PostDate'
require('prismjs/themes/prism.css')

const PostBody = props => {
  return (
    <div>
      <hr />
      <h5 className="mb-3 mt-4">
        {props.tags && <TagList tags={props.tags} />}
      </h5>
      <PostDate date={props.date} />

      <p
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default PostBody
