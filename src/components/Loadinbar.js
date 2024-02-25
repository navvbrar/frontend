import React, { useContext } from 'react'
import LoadingBar from 'react-top-loading-bar';
import productcontext from '../context/Productcontext';
export default function Loadinbar() {
    const{loading,setloading}=useContext(productcontext)
  return (
    <>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={loading}
        onLoaderFinished={() => setloading(0)}
        loaderSpeed={1200}
      />
    </>
  )
}
