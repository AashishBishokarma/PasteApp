import React, { useState ,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useSearchParams} from "react-router-dom"
import {addToPastes,updateToPastes} from '../redux/pasteSlice'

const ViewPaste = () =>{
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
      <input
        className="p-1 rounded-2xl mt-4 w-[60%] pl-4"
        type="text"
        placeholder="Enter Title here"
        value={title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <button
      onClick={createPaste}
      className="p-3 rounded-2xl mt-4">
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button> */}
    </div>
    <div className='mt-4'>
      <textarea
      className='rounded-2xl mt-5 min-w-[500px] p-4'
      value={value}
      placeholder='Enter content here'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      disable
      />
    </div>
    </div>
    
  )
}

export default ViewPaste;