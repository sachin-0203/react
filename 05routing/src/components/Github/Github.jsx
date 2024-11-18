import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData]= useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/sachin-0203')
    .then(response => response.json())
    .then(data =>{
      setData(data);
    })
  }, [])
  return (
    <div className="text-center bg-gray-700 text-3xl py-4 text-white">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github;
