import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'

export default function Progressbar() {
    const now = 50
  return (
    <>
      <ProgressBar now={now} label={`${now}%`} striped variant="success"/>
    </>
  )
}
