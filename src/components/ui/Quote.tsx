import React from 'react'
import Image from 'next/image'

interface IQuoteProps {
    quote : string
}

function Quote({quote}:IQuoteProps) {
  return (
    <div className='relative w-fit py-1 px-4'>
        <Image src="/Assets/svgs/quoteBracket.svg" width={7} height={7} className="filter-white rotate-90 top-0 left-0 absolute" alt=''/>
        <Image src="/Assets/svgs/quoteBracket.svg" width={7} height={7} className="filter-white rotate-0 bottom-0 left-0 absolute" alt=''/>

        <Image src="/Assets/svgs/quoteBracket.svg" width={7} height={7} className="filter-white rotate-180 top-0 right-0 absolute" alt=''/>
        <Image src="/Assets/svgs/quoteBracket.svg" width={7} height={7} className="filter-white -rotate-90 bottom-0 right-0 absolute" alt=''/>
        <p className='font-poppins font-medium text-[11px]'>{quote}</p>
    </div>
  )
}

export default Quote