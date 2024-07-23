import React, { useState } from 'react'

const Changecolor = () => {
    const [color, setChangecolor] = useState("yellow")
    
    const addred=(color)=>{
      setChangecolor(color)
    }
 
  return (
    <div className=' w-full h-screen duration-300' style={{backgroundColor:color, width: '100vw', height: '100vh'}}>
        <div className='flex flex-wrap bottom-12 inset-x-0 px-2 fixed justify-center items-center gap-2'>
            <div className='flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
            <button onClick={()=>addred('red')} className='bg-red-700 text-white'>Red</button>
           <button onClick={()=>addred('green')} className='bg-green-700 text-white'>Green</button>
              <button onClick={()=>addred('blue')} className='bg-blue-700 text-white'>Blue</button>
            </div>

        </div>
    </div>
  )
}

export default Changecolor