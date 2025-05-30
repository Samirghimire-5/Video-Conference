"use client";

import React, { useEffect } from 'react'
import {io} from "socket.io-client"

const Dashboard = () => {
 const socket = io("http://localhost:8000")

 useEffect(() => {
   socket.on("connection", () => {
    console.log("connected");
   })
 })
  return (
    <div>
      hi
    </div>
  )
}

export default Dashboard