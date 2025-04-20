import React, { useContext, useMemo, useState } from 'react'
import { NewsContext } from '../contexts/NewsContext'


function SearchBar() {

  const [input, setInput] = useState("")

  const {setQuery} = useContext(NewsContext)

  return (
    <div className='flex'>
        <input className="
        w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500
        " type='text' 
        placeholder='search here'
        onChange={(e)=>setInput(e.target.value)}/>
        <button className='
        px-4 py-2 bg-[var(--button-bg)] text-black font-semibold rounded-r-md hover:bg-[var(--button-hover)] transition
        '
        onClick={()=> setQuery(input)}>Search</button>
    </div>
  )
}

export default SearchBar