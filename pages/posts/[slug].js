import React from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getAllPost } from '../../lib/post-util'

// Lecture 186 dynamic data fetching
const PostDetailPage = () => {
  return (
    <div>
      <PostContent />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context

  const allPosts = getAllPost()
  const singlePost = allPosts.filter((post) => post.slug === params.slug)
  return {
    props: {
      posts: singlePost,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPost()
  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default PostDetailPage
