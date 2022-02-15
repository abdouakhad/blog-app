import React from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPost } from '../../lib/post-util'

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  )
}

export default AllPostsPage

export async function getStaticProps() {
  const allPosts = getAllPost()
  return {
    props: {
      posts: allPosts,
    },
  }
}
