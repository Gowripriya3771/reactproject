import React from 'react'
import { useNavigate } from 'react-router-dom'

function Player() {
    const navigate=useNavigate()
  return (
    <div>
       <div><button style={{color:"white"}} onClick={() => navigate("/app")}>Back</button></div> 
      <video width="750" height="500" controls >
      <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"/>
     </video>
    </div>
  )
}

export default Player

