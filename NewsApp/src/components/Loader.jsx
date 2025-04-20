import React from 'react'

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[--bg]">
        <div className='animate-spin rounded-full h-16 w-16 border-4 border-[var(--hover)] border-t-[var(--loader-ring)]'></div>
    </div>
  )
}

export default Loader