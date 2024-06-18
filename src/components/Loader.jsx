import React from 'react'

const Loader = () => {
  return (
    <div>
      <div id='loader' className="h-[100vh] w-full bg-black">
        <div className='justify-center items-center flex-col space-y-5'>
          <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            
          </div>
          <div className="text-white">Getting info.Please wait....</div>
          </div>
        </div>
    </div>
  )
}

export default Loader
