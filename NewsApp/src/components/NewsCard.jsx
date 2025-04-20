import React from 'react'


function NewsCard({obj}) {

  const maxLen = (str) => {
    return str.length > 55 ? str.slice(0, 55)+"..." : str; 
  }

  return (
    <div
    className='card rounded-2xl shadow-md overflow-hidden
    transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
        <a href={obj.source.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className='w-full h-[calc(320px*9/16)] flex justify-center items-center'
          style={{
            backgroundImage : "url(../src/assets/16-9-placeholder.jpg)"
          }}>
            <img
            src={obj.image ? obj.image : ""}
            alt=''
            className='h-[180px] w-auto overflow-hidden'/>
          </div>
            <h3 className='ml-2 mt-5 mr-2 text-[1.25rem]/[1.4rem] font-bold text-[var(--text)]'>{maxLen(obj.title)}</h3> 
            <h6 className='ml-2 mr-2 text-sm/normal font-light text-[var(--text-muted)]'>{obj.publishedAt}</h6>
            <p className='mt-1.5 ml-2 mr-2 mb-2 text-sm/normal text-[var(--text-muted)]'>{obj.source.name}, {obj.source.url}</p>
        </a>
    </div>
  )
}

export default NewsCard