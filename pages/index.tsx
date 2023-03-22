import type { NextPage } from 'next'
import Head from 'next/head'
import ArticlesList from '../components/ArticlesList'
import Image from 'next/image'

const list = [
  {
    number: 0,
    author: "ASQ Unilorin",
    coverImage: "https://shopperintelligence.com/wp-content/uploads/2022/11/Picture-1.webp",
    title: "Benchmarking",
    description: "Explore the world of benchmarking and how it can play a vital role in your pursuit of a quality life",
    slug: "benchmarking",
    date: "March 12, 2023",
    categories: [
      {title: "Productivity"},
    ]
  },
  {
    number: 1,
    author: "ASQ Unilorin",
    coverImage: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1511848673/1511848671.jpg",
    title: "Quality Learning",
    description: "Uncover how to learn in the most efficient and effective way through quality learning",
    slug: "quality-learning",
    date: "March 21, 2023",
    categories: [
      {title: "Improvement"},
    ]
  },
  ]
const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>ASQ Unilorin</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" /> */}
      </Head>

      <ArticlesList articles={list} /> 
    </div>
  )
}

export default Home
