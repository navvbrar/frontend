import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'

export default function Progressbar(props) {
  const {order} = props
  console.log(order.status)
  var now
    const setprogress =()=>{
     if (order.status.deliver===true){
      now = 100
     }
     else if (order.status.pickup===true){
      now = 65
     }
     else if (order.status.shipped===true){
      now = 45
     }
     else if (order.status.ordered===true){
      now = 7
     }

    }
    setprogress()
  return (
    <>
      <ProgressBar  now={now}  striped variant="success"/>
    </>
  )
}
