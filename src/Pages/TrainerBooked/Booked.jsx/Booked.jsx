import React from 'react'
import { useParams } from 'react-router-dom'

export default function Booked() {
    const data = useParams()
    console.log(data)
  return (
    <div>
      booked
    </div>
  )
}
