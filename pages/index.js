import React from 'react'
import Hero from '../components/homepage/Hero'
import FeaturedPosts from '../components/homepage/featured-posts'
import { getFeaturedPosts } from '../lib/post-util'
const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}
