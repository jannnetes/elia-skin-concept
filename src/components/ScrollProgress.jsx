import { useEffect, useState } from "react"

export default function ScrollProgress(){
  const [w,setW]=useState(0)
  useEffect(()=>{
    const f=()=>{
      const h=document.documentElement
      setW((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)
    }
    window.addEventListener("scroll",f)
    return ()=>window.removeEventListener("scroll",f)
  },[])
  return <div style={{width:w+"%"}} className="fixed top-0 left-0 h-1 bg-black z-40"/>
}
