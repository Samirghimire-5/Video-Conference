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
    <div>Dashboard</div>
  )
}

export default Dashboard