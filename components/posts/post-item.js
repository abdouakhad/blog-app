import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './post-item.module.css'
const PostItem = (props) => {
  const { title, image, slug, excerpt, date } = props.post
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const linkPath = `/posts/${slug}`
  const imagePath = `/images/posts/${slug}/${image}`
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt='img'
              width={300}
              height={300}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <time>{formattedDate}</time>
            <p> {excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
