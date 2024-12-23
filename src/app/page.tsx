"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [Images, setImages] = useState([])
  const getImg = async () =>{
    try{
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data
    setImages(data)
    console.log(Images)
    }catch(error){
      console.log("Error fetching images")
    }
  }
  return (
    <div>
      <button onClick={getImg} className='px-5 py-3 bg-green-800 text-white font-bold mx-20 my-16'>Get Images</button>
      <div className='p-8'>
      {Images.map((elem, i)=>{
      //  return <h1 key={i}>{elem.author}</h1>
      return <img 
      key={i}
      src={elem.download_url}
      width={200}
      height={200}
      className='m-10 rounded inline-block'
      />
})}
      </div>
    </div>
  )
}

export default page