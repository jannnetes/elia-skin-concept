import { useState, useEffect } from "react"
import LoadingScreen from "./components/LoadingScreen"
import ScrollProgress from "./components/ScrollProgress"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import BeforeAfter from "./components/BeforeAfter"
import SkinQuiz from "./components/SkinQuiz"
import RoutineBuilder from "./components/RoutineBuilder"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

export default function App() {
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>setLoading(false),1800)
  },[])

  if(loading) return <LoadingScreen/>

  return (
    <>
      <ScrollProgress/>
      <Navbar/>
      <Hero/>
      <About/>
      <BeforeAfter/>
      <SkinQuiz/>
      <RoutineBuilder/>
      <Gallery/>
      <Booking/>
      <Footer/>
    </>
  )
}
