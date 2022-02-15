import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

// Extract the data inside the files
// Technically this is a helper function than return
// the data from one file
export const getPostData = (fileName) => {
  const filePath = path.join(postDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const postSlug = fileName.replace(/\.md$/, '')
  const postData = {
    slug: postSlug,
    content,
    ...data,
  }
  console.log(postData)
  return postData
}

// Get all the posts
// This one uses the function above to return data from each file inside the posts folder
// and then stores all of them in one array
// Finnal we use the sort method to extract each array
export const getAllPost = () => {
  const postFiles = fs.readdirSync(postDirectory)
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })
  const sortedPost = allPosts.sort((a, b) => {
    a.date > b.date ? -1 : 1
  })
  return sortedPost
}

// Get all the featured posts
export const getFeaturedPosts = () => {
  const allPosts = getAllPost()
  const featuredPosts = allPosts.filter((post) => {
    return post.isFeatured
  })
  return featuredPosts
}
