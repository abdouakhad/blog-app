import React from 'react'
import AllPosts from '../../components/posts/all-posts'
const DUMMY_POST = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next.js is a React framework that makes it easy to build fast, modern websites and apps.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with Next.js',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next.js is a React framework that makes it easy to build fast, modern websites and apps.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with Next.js',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next.js is a React framework that makes it easy to build fast, modern websites and apps.',
    date: '2022-02-10',
  },
]
const AllPostsPage = ({ posts }) => {
  return (
    <>
      <AllPosts posts={DUMMY_POST} />
    </>
  )
}

export default AllPostsPage
