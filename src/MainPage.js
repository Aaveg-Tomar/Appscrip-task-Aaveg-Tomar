import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import "./MainPage.css"
import Banner from './Banner'

const MainPage = () => {
  return (
   <div>
    <Header/>
    <Banner/>
    <Content/>
    <Footer/>
   </div>
  )
}

export default MainPage