import React from 'react'
import Progressbar from './Progressbar'

function Skillscard(props) {
  return (
    
    <div className="flex justify-center">
      <div className="flex flex-col  items-center mt-4 w-[85%] h-72 bg-gradient-to-b from-blue-500 to-purple-700 rounded-lg">
        <div className="h-[33%] text-white text-justify ml-2 mr-2 mb-2">
          <Progressbar className="" percentage={props.percentage} />
        </div>
      </div>
    </div>
    
  )
}

export default Skillscard