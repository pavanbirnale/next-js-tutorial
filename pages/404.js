import React from 'react'
import { useEffect } from 'react';
import { useRouter }from 'next/router'
const Error = () => {

    const router= useRouter();
    useEffect(()=>{
      setTimeout(() => {
        router.push("/");
      }, 3000);
      
    },[])
  return (
    <>
      <div className="outer">
        <div className="inner">
        <div className="content">
            <h1 className='error'>404 Error</h1>
           
        </div>
        </div>
      </div>
    </>
  )
}

export default Error
