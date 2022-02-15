import React from 'react'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with Next.js',
  image: 'getting-started-with-nextjs.png',
  content: '# This is a first post',
  date: '2022-02-10',
}
console.log(DUMMY_POST)
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  console.log(DUMMY_POST.content)
  return (
    <>
      <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      </article>
    </>
  )
}

export default PostContent
