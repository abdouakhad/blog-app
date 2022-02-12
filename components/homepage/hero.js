import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/sites/img.png'
          alt='blog'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'am Top</h1>
      <p>I build websites usingRreact JS Next JS and Tailwind CSS</p>
    </section>
  )
}

export default Hero
