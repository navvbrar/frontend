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
      now = 75
     }
     else if (order.status.shipped===true){
      now = 50
     }
     else if (order.status.ordered===true){
      now = 25
     }

    }
    setprogress()
  return (
    <>
      <ProgressBar now={now} label={`${now}%`} striped variant="success"/>
    </>
  )
}
