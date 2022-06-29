import React from 'react'
import Navbar from "../components/navbar"
 const NestedLayout = ({children}:{
    children:React.ReactNode
 }) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
export default NestedLayout;