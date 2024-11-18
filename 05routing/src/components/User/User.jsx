import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {id}= useParams();
  return (
  <div className="text-center bg-gray-500 py-4 text-3xl text-white">
    User: {id}
    
  </div>
  )
}

export default User;
