
import React, { useContext } from 'react';

import PulseLoader from "react-spinners/PulseLoader";
import productcontext from '../context/Productcontext';

export default function Spinner() {
    const {spinner} = useContext(productcontext)
  return (
   <>
   <div style={{margin:"20px 600px"}}   >
    <PulseLoader
        //  loading={spinner===true?true:false}
         color="#36d7b7"
        loading={spinner===true?true:false}
        height={150}
        width={130}
        margin={5}
      />
      </div>
    </>
  )
}
