import React from 'react'
import ReactLoading from "react-loading"
 const Loading = () => {
  return (
    <>
<div className="container">
    <div className="row">
        <div className="col-md-3">
    <ReactLoading height={"10vh"} width={'10vw'}  color={"#ff6a00"}/>
    </div>
    <div className="col-md-3">
    <ReactLoading height={"10vh"}   width={'10vw'} color={"#ff6a00"}/>
    </div>
    <div className="col-md-3">
    <ReactLoading height={"10vh"}  width={'10vw'} color={"#ff6a00"}/>
    </div>
    <div className="col-md-3">
    <ReactLoading height={"10vh"}  width={'10vw'} color={"#ff6a00"}/>
    </div>
    </div>
    </div>
    </>
  )
}
export default Loading;
