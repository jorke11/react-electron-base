
import React from 'react'

const HomePage =()=>{
 return (
     <>
        <p>HomePage</p>
        <button onClick={async()=>{
            console.log('window.electron',window.electron);
            let data = await window.electron.aldelo.getOrdersHeaders()
            console.log('data',data);
        }}>Test</button>
        <a href="/login" >go to login</a>
     </>
   
 )
}
export default HomePage